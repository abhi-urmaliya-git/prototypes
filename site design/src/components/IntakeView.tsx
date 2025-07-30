import { useState } from 'react'
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Title2,
  Body1,
  Card,
  CardHeader,
  makeStyles,
  shorthands,
  tokens,
  Divider,
  Field,
  Dropdown,
  Option,
} from '@fluentui/react-components'
import {
  Search24Regular,
  Add24Regular,
  Eye24Regular,
  DocumentArrowRight24Regular,
  Dismiss24Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    position: 'relative',
  },
  containerWithPanel: {
    display: 'flex',
    flexDirection: 'row',
    ...shorthands.gap('20px'),
    position: 'relative',
    height: 'calc(100vh - 125px)',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    ...shorthands.overflow('auto'),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    display: 'flex',
    ...shorthands.gap('12px'),
    alignItems: 'center',
    ...shorthands.padding('16px'),
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  tableContainer: {
    ...shorthands.overflow('auto'),
    maxHeight: '600px',
  },
  actionCell: {
    display: 'flex',
    ...shorthands.gap('8px'),
  },
  panel: {
    width: '400px',
    backgroundColor: tokens.colorNeutralBackground1,
    borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('24px'),
    ...shorthands.gap('20px'),
    position: 'relative',
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  panelContent: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
    flex: 1,
  },
  panelFooter: {
    display: 'flex',
    ...shorthands.gap('8px'),
    justifyContent: 'flex-end',
    marginTop: 'auto',
    paddingTop: '16px',
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  noResults: {
    textAlign: 'center',
    ...shorthands.padding('40px'),
    color: tokens.colorNeutralForeground2,
  },
})

interface IntakeItem {
  id: string
  title: string
  source: 'ADO' | 'SNOW'
  status: string
  createdDate: string
  assignee: string
  priority: string
}

const mockIntakeData: IntakeItem[] = [
  {
    id: 'ADO-123',
    title: 'Network Infrastructure Upgrade - Data Center A',
    source: 'ADO',
    status: 'New',
    createdDate: '2025-01-15',
    assignee: 'John Smith',
    priority: 'High',
  },
  {
    id: 'SNOW-456',
    title: 'Branch Office Network Setup',
    source: 'SNOW',
    status: 'In Progress',
    createdDate: '2025-01-20',
    assignee: 'Jane Doe',
    priority: 'Medium',
  },
  {
    id: 'ADO-789',
    title: 'Security Enhancement Project',
    source: 'ADO',
    status: 'Ready for Design',
    createdDate: '2025-01-25',
    assignee: 'Mike Johnson',
    priority: 'High',
  },
]

export default function IntakeView() {
  const styles = useStyles()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [intakeItems, setIntakeItems] = useState<IntakeItem[]>(mockIntakeData)
  const [isImportPanelOpen, setIsImportPanelOpen] = useState(false)
  const [importSource, setImportSource] = useState<'ADO' | 'SNOW'>('ADO')
  const [importId, setImportId] = useState('')

  const filteredItems = intakeItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = () => {
    // In a real app, this would make an API call
    console.log('Searching for:', searchTerm)
  }

  const handleImport = () => {
    if (importId) {
      // Simulate importing from ADO or SNOW
      const newItem: IntakeItem = {
        id: `${importSource}-${importId}`,
        title: `Imported Project from ${importSource}`,
        source: importSource,
        status: 'Imported',
        createdDate: new Date().toISOString().split('T')[0],
        assignee: 'Current User',
        priority: 'Medium',
      }
      setIntakeItems([...intakeItems, newItem])
      setIsImportPanelOpen(false)
      setImportId('')
    }
  }

  const handleCreateDesign = (projectId: string) => {
    navigate(`/design/${projectId}`)
  }

  const handleViewDetails = (item: IntakeItem) => {
    console.log('Viewing details for:', item)
    // Could open a details modal or navigate to a details page
  }

  return (
    <div className={isImportPanelOpen ? styles.containerWithPanel : styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <Title2>Project Intake Management</Title2>
          <Button 
            appearance="primary" 
            icon={<Add24Regular />}
            onClick={() => setIsImportPanelOpen(true)}
          >
            Import Project
          </Button>
        </div>

        <Card>
          <div style={{ padding: '24px' }}>
            <div className={styles.searchSection}>
              <Input
                placeholder="Search projects by title or ID..."
                value={searchTerm}
                onChange={(_, data) => setSearchTerm(data.value)}
                contentBefore={<Search24Regular />}
                style={{ flexGrow: 1 }}
              />
              <Button appearance="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <Body1><strong>Intake Items ({filteredItems.length})</strong></Body1>
          </CardHeader>
          <Divider />
          <div style={{ padding: '24px' }}>
            {filteredItems.length === 0 ? (
              <div className={styles.noResults}>
                <Body1>No records found</Body1>
              </div>
            ) : (
              <div className={styles.tableContainer}>
                <Table arial-label="Intake items table">
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>ID</TableHeaderCell>
                      <TableHeaderCell>Title</TableHeaderCell>
                      <TableHeaderCell>Source</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                      <TableHeaderCell>Created</TableHeaderCell>
                      <TableHeaderCell>Assignee</TableHeaderCell>
                      <TableHeaderCell>Priority</TableHeaderCell>
                      <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.source}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell>{item.createdDate}</TableCell>
                        <TableCell>{item.assignee}</TableCell>
                        <TableCell>{item.priority}</TableCell>
                        <TableCell>
                          <div className={styles.actionCell}>
                            <Button
                              appearance="subtle"
                              icon={<Eye24Regular />}
                              size="small"
                              onClick={() => handleViewDetails(item)}
                            >
                              View
                            </Button>
                            <Button
                              appearance="primary"
                              icon={<DocumentArrowRight24Regular />}
                              size="small"
                              onClick={() => handleCreateDesign(item.id)}
                            >
                              Create Design
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </Card>
      </div>

      {isImportPanelOpen && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <Title2>Import Project</Title2>
            <Button
              appearance="subtle"
              icon={<Dismiss24Regular />}
              onClick={() => setIsImportPanelOpen(false)}
            />
          </div>
          
          <div className={styles.panelContent}>
            <Field label="Target System">
              <Dropdown
                value={importSource}
                onOptionSelect={(_, data) => setImportSource(data.optionValue as 'ADO' | 'SNOW')}
              >
                <Option value="ADO">Azure DevOps (ADO)</Option>
                <Option value="SNOW">ServiceNow (SNOW)</Option>
              </Dropdown>
            </Field>
            
            <Field label={importSource === 'ADO' ? 'Work Item ID' : 'RITM'}>
              <Input
                placeholder={importSource === 'ADO' ? 'Enter work item ID' : 'Enter RITM number'}
                value={importId}
                onChange={(_, data) => setImportId(data.value)}
              />
            </Field>
          </div>

          <div className={styles.panelFooter}>
            <Button 
              appearance="secondary" 
              onClick={() => setIsImportPanelOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              appearance="primary" 
              onClick={handleImport}
              disabled={!importId}
            >
              Import
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
