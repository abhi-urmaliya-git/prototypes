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
  Table24Regular,
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

interface CableMapItem {
  id: string
  cableId: string
  fromDevice: string
  fromPort: string
  toDevice: string
  toPort: string
  cableType: string
  length: string
  notes: string
}

const mockCableMapData: CableMapItem[] = [
  {
    id: '1',
    cableId: 'CAB-001',
    fromDevice: 'Core-SW-01',
    fromPort: 'Te1/0/1',
    toDevice: 'Core-SW-02',
    toPort: 'Te1/0/1',
    cableType: 'Fiber OM4',
    length: '3m',
    notes: 'Primary trunk link',
  },
  {
    id: '2',
    cableId: 'CAB-002',
    fromDevice: 'Core-SW-01',
    fromPort: 'Te1/0/2',
    toDevice: 'Access-SW-01',
    toPort: 'Te1/0/24',
    cableType: 'Fiber OM4',
    length: '15m',
    notes: 'Uplink to access layer',
  },
  {
    id: '3',
    cableId: 'CAB-003',
    fromDevice: 'Core-SW-02',
    fromPort: 'Te1/0/2',
    toDevice: 'Access-SW-02',
    toPort: 'Te1/0/24',
    cableType: 'Fiber OM4',
    length: '18m',
    notes: 'Uplink to access layer',
  },
]

export default function CableMapManager() {
  const styles = useStyles()
  const { projectId } = useParams()
  const [cableMapItems, setCableMapItems] = useState<CableMapItem[]>(mockCableMapData)
  const [validationResults, setValidationResults] = useState<string[]>([])
  const [isValidationRunning, setIsValidationRunning] = useState(false)

  const totalCables = cableMapItems.length
  const fiberCables = cableMapItems.filter(item => item.cableType.includes('Fiber')).length
  const copperCables = cableMapItems.filter(item => item.cableType.includes('Copper')).length

  const handleGenerateCableMap = () => {
    console.log('Generating Cable Map from design...')
    // In real implementation, this would generate cable map from the design
  }

  const handleValidation = async () => {
    setIsValidationRunning(true)
    // Simulate validation
    setTimeout(() => {
      setValidationResults([
        'Validation passed: All cable connections are valid',
        'Warning: Cable CAB-003 length may require verification',
        'Info: Port utilization within acceptable limits',
        'Info: Cable type consistency check passed'
      ])
      setIsValidationRunning(false)
    }, 2000)
  }

  const handleSave = () => {
    console.log('Saving Cable Map to GraphStore...')
    // Simulate autosave to GraphStore
  }

  const updateCableMapItem = (id: string, field: keyof CableMapItem, value: string) => {
    setCableMapItems(items => 
      items.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value }
        }
        return item
      })
    )
  }

  const addCableMapItem = () => {
    const newItem: CableMapItem = {
      id: String(cableMapItems.length + 1),
      cableId: `CAB-${String(cableMapItems.length + 1).padStart(3, '0')}`,
      fromDevice: '',
      fromPort: '',
      toDevice: '',
      toPort: '',
      cableType: 'Fiber OM4',
      length: '',
      notes: '',
    }
    setCableMapItems([...cableMapItems, newItem])
  }

  const removeCableMapItem = (id: string) => {
    setCableMapItems(items => items.filter(item => item.id !== id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Title2>Cable Map Management</Title2>
          <Body1>Project: {projectId}</Body1>
        </div>
        <div className={styles.actionBar}>
          <Button 
            appearance="primary" 
            icon={<Table24Regular />}
            onClick={handleGenerateCableMap}
          >
            Generate from Design
          </Button>
          <Button 
            appearance="outline" 
            icon={<Play24Regular />}
            onClick={handleValidation}
            disabled={isValidationRunning}
          >
            {isValidationRunning ? 'Validating...' : 'Validate Cable Map'}
          </Button>
          <Button 
            appearance="primary" 
            icon={<Save24Regular />}
            onClick={handleSave}
          >
            Save Cable Map
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <Title3>Cable Map Summary</Title3>
        </CardHeader>
        <div style={{ padding: '16px' }}>
          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              <Title3>{totalCables}</Title3>
              <Body1>Total Cables</Body1>
            </div>
            <div className={styles.summaryItem}>
              <Title3>{fiberCables}</Title3>
              <Body1>Fiber Cables</Body1>
            </div>
            <div className={styles.summaryItem}>
              <Title3>{copperCables}</Title3>
              <Body1>Copper Cables</Body1>
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
            <Title3>Cable Connections</Title3>
            <Button 
              appearance="primary" 
              icon={<DocumentAdd24Regular />}
              onClick={addCableMapItem}
            >
              Add Cable
            </Button>
          </div>
        </CardHeader>
        <Divider />
        <div style={{ padding: '16px' }}>
          <div className={styles.tableContainer}>
            <Table arial-label="Cable map table">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Cable ID</TableHeaderCell>
                  <TableHeaderCell>From Device</TableHeaderCell>
                  <TableHeaderCell>From Port</TableHeaderCell>
                  <TableHeaderCell>To Device</TableHeaderCell>
                  <TableHeaderCell>To Port</TableHeaderCell>
                  <TableHeaderCell>Cable Type</TableHeaderCell>
                  <TableHeaderCell>Length</TableHeaderCell>
                  <TableHeaderCell>Notes</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cableMapItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.cableId}
                        onChange={(_, data) => updateCableMapItem(item.id, 'cableId', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.fromDevice}
                        onChange={(_, data) => updateCableMapItem(item.id, 'fromDevice', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.fromPort}
                        onChange={(_, data) => updateCableMapItem(item.id, 'fromPort', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.toDevice}
                        onChange={(_, data) => updateCableMapItem(item.id, 'toDevice', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.toPort}
                        onChange={(_, data) => updateCableMapItem(item.id, 'toPort', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Dropdown
                        value={item.cableType}
                        onOptionSelect={(_, data) => updateCableMapItem(item.id, 'cableType', data.optionValue as string)}
                      >
                        <Option value="Fiber OM3">Fiber OM3</Option>
                        <Option value="Fiber OM4">Fiber OM4</Option>
                        <Option value="Fiber OM5">Fiber OM5</Option>
                        <Option value="Copper Cat6">Copper Cat6</Option>
                        <Option value="Copper Cat6A">Copper Cat6A</Option>
                        <Option value="Twinax">Twinax</Option>
                        <Option value="Power">Power</Option>
                      </Dropdown>
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.length}
                        onChange={(_, data) => updateCableMapItem(item.id, 'length', data.value)}
                        placeholder="e.g., 3m, 10ft"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        className={styles.editableCell}
                        value={item.notes}
                        onChange={(_, data) => updateCableMapItem(item.id, 'notes', data.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className={styles.actionCell}>
                        <Button
                          appearance="subtle"
                          icon={<Delete24Regular />}
                          size="small"
                          onClick={() => removeCableMapItem(item.id)}
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
