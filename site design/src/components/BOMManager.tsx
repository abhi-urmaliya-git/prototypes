import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Button,
  Title2,
  Title3,
  Body1,
  Card,
  CardHeader,
  makeStyles,
  shorthands,
  tokens,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Input,
  Divider,
  MessageBar,
  MessageBarBody,
  Dropdown,
  Option,
} from '@fluentui/react-components'
import {
  Save24Regular,
  Play24Regular,
  DocumentAdd24Regular,
  Delete24Regular,
  DocumentTable24Regular,
} from '@fluentui/react-icons'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBar: {
    display: 'flex',
    ...shorthands.gap('12px'),
    alignItems: 'center',
  },
  tableContainer: {
    ...shorthands.overflow('auto'),
    maxHeight: '500px',
  },
  editableCell: {
    minWidth: '120px',
  },
  actionCell: {
    display: 'flex',
    ...shorthands.gap('8px'),
  },
  summary: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    ...shorthands.gap('16px'),
    ...shorthands.padding('16px'),
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  summaryItem: {
    textAlign: 'center',
  },
  validationResults: {
    maxHeight: '200px',
    ...shorthands.overflow('auto'),
  },
})

interface BOMItem {
  id: string
  partNumber: string
  description: string
  vendor: string
  quantity: number
  unitPrice: number
  totalPrice: number
  category: string
  deliveryWeeks: number
}

const mockBOMData: BOMItem[] = [
  {
    id: '1',
    partNumber: 'C9300-48T',
    description: 'Catalyst 9300 48-port switch',
    vendor: 'Cisco',
    quantity: 2,
    unitPrice: 8500,
    totalPrice: 17000,
    category: 'Switching',
    deliveryWeeks: 4,
  },
  {
    id: '2',
    partNumber: 'CAB-SFP-SFP-1M',
    description: '1m SFP+ Twinax Cable',
    vendor: 'Cisco',
    quantity: 10,
    unitPrice: 75,
    totalPrice: 750,
    category: 'Cables',
    deliveryWeeks: 1,
  },
  {
    id: '3',
    partNumber: 'SFP-10G-SR',
    description: '10Gb SFP+ SR Transceiver',
    vendor: 'Cisco',
    quantity: 8,
    unitPrice: 450,
    totalPrice: 3600,
    category: 'Optics',
    deliveryWeeks: 2,
  },
]

export default function BOMManager() {
  const styles = useStyles()
  const { projectId } = useParams()
  const [bomItems, setBomItems] = useState<BOMItem[]>(mockBOMData)
  const [validationResults, setValidationResults] = useState<string[]>([])
  const [isValidationRunning, setIsValidationRunning] = useState(false)

  const totalCost = bomItems.reduce((sum, item) => sum + item.totalPrice, 0)
  const totalItems = bomItems.reduce((sum, item) => sum + item.quantity, 0)
  const maxDeliveryWeeks = Math.max(...bomItems.map(item => item.deliveryWeeks))

  const handleGenerateBOM = () => {
    console.log('Generating BOM from design...')
    // In real implementation, this would generate BOM from the design
  }

  const handleValidation = async () => {
    setIsValidationRunning(true)
    // Simulate validation
    setTimeout(() => {
      setValidationResults([
        'Validation passed: All part numbers are valid',
        'Warning: Delivery time for item C9300-48T exceeds project timeline',
        'Info: Total cost within budget constraints',
        'Info: Vendor diversity check passed'
      ])
      setIsValidationRunning(false)
    }, 2000)
  }

  const handleSave = () => {
    console.log('Saving BOM to GraphStore...')
    // Simulate autosave to GraphStore
  }

  const updateBOMItem = (id: string, field: keyof BOMItem, value: any) => {
    setBomItems(items => 
      items.map(item => {
        if (item.id === id) {
          const updated = { ...item, [field]: value }
          // Recalculate total price if quantity or unit price changes
          if (field === 'quantity' || field === 'unitPrice') {
            updated.totalPrice = updated.quantity * updated.unitPrice
          }
          return updated
        }
        return item
      })
    )
  }

  const addBOMItem = () => {
    const newItem: BOMItem = {
      id: String(bomItems.length + 1),
      partNumber: '',
      description: '',
      vendor: '',
      quantity: 1,
      unitPrice: 0,
      totalPrice: 0,
      category: 'Other',
      deliveryWeeks: 1,
    }
    setBomItems([...bomItems, newItem])
  }

  const removeBOMItem = (id: string) => {
    setBomItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Title2>Bill of Materials (BOM)</Title2>
          <Body1>Project: {projectId}</Body1>
        </div>
        <div className={styles.actionBar}>
          <Button 
            appearance="primary" 
            icon={<DocumentTable24Regular />}
            onClick={handleGenerateBOM}
          >
            Generate from Design
          </Button>
          <Button 
            appearance="outline" 
            icon={<Play24Regular />}
            onClick={handleValidation}
            disabled={isValidationRunning}
          >
            {isValidationRunning ? 'Validating...' : 'Validate BOM'}
          </Button>
          <Button 
            appearance="primary" 
            icon={<Save24Regular />}
            onClick={handleSave}
          >
            Save BOM
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <Title3>BOM Summary</Title3>
        </CardHeader>
        <div style={{ padding: '16px' }}>
          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              <Title3>${totalCost.toLocaleString()}</Title3>
              <Body1>Total Cost</Body1>
            </div>
            <div className={styles.summaryItem}>
              <Title3>{totalItems}</Title3>
              <Body1>Total Items</Body1>
            </div>
            <div className={styles.summaryItem}>
              <Title3>{bomItems.length}</Title3>
              <Body1>Line Items</Body1>
            </div>
            <div className={styles.summaryItem}>
              <Title3>{maxDeliveryWeeks} weeks</Title3>
              <Body1>Max Delivery</Body1>
            </div>
          </div>
        </div>
      </Card>

      {validationResults.length > 0 && (
        <Card>
          <CardHeader>
            <Title3>Validation Results</Title3>
          </CardHeader>
          <div style={{ padding: '16px' }}>
            <div className={styles.validationResults}>
              {validationResults.map((result, index) => (
                <MessageBar key={index} intent={result.includes('Warning') ? 'warning' : result.includes('Info') ? 'info' : 'success'}>
                  <MessageBarBody>{result}</MessageBarBody>
                </MessageBar>
              ))}
            </div>
          </div>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title3>Order Sheet</Title3>
            <Button 
              appearance="primary" 
              icon={<DocumentAdd24Regular />}
              onClick={addBOMItem}
            >
              Add Item
            </Button>
          </div>
        </CardHeader>
        <Divider />
        <div style={{ padding: '16px' }}>
          <div className={styles.tableContainer}>
            <Table arial-label="BOM items table">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Part Number</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                  <TableHeaderCell>Vendor</TableHeaderCell>
                  <TableHeaderCell>Category</TableHeaderCell>
                  <TableHeaderCell>Quantity</TableHeaderCell>
                  <TableHeaderCell>Unit Price</TableHeaderCell>
                  <TableHeaderCell>Total Price</TableHeaderCell>
                  <TableHeaderCell>Delivery (Weeks)</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bomItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.partNumber}
                        onChange={(_, data) => updateBOMItem(item.id, 'partNumber', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.description}
                        onChange={(_, data) => updateBOMItem(item.id, 'description', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.vendor}
                        onChange={(_, data) => updateBOMItem(item.id, 'vendor', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Dropdown
                        value={item.category}
                        onOptionSelect={(_, data) => updateBOMItem(item.id, 'category', data.optionValue)}
                      >
                        <Option value="Switching">Switching</Option>
                        <Option value="Routing">Routing</Option>
                        <Option value="Security">Security</Option>
                        <Option value="Cables">Cables</Option>
                        <Option value="Optics">Optics</Option>
                        <Option value="Power">Power</Option>
                        <Option value="Other">Other</Option>
                      </Dropdown>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={styles.editableCell}
                        value={String(item.quantity)}
                        onChange={(_, data) => updateBOMItem(item.id, 'quantity', parseInt(data.value) || 0)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={styles.editableCell}
                        value={String(item.unitPrice)}
                        onChange={(_, data) => updateBOMItem(item.id, 'unitPrice', parseFloat(data.value) || 0)}
                      />
                    </TableCell>
                    <TableCell>${item.totalPrice.toLocaleString()}</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        className={styles.editableCell}
                        value={String(item.deliveryWeeks)}
                        onChange={(_, data) => updateBOMItem(item.id, 'deliveryWeeks', parseInt(data.value) || 1)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className={styles.actionCell}>
                        <Button
                          appearance="subtle"
                          icon={<Delete24Regular />}
                          size="small"
                          onClick={() => removeBOMItem(item.id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  )
}
