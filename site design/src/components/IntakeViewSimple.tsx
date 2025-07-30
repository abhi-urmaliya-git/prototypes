import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  Body1,
  Body2,
  Badge,
  Link,
  Checkbox,
  makeStyles,
  shorthands,
  tokens,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableSelectionCell,
  TableCellLayout,
  Combobox,
  Option,
  Title3,
  Card,
  CardHeader,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@fluentui/react-components'
import {
  Search24Regular,
  Circle16Regular,
  DismissRegular,
  CheckmarkCircle16Filled,
  BotSparkle20Regular,
  ChevronDown16Regular,
  Dismiss16Regular,
} from '@fluentui/react-icons'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('16px', '24px'),
    ...shorthands.gap('16px'),
    flexShrink: 0,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  leftToolbar: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
  },
  rightToolbar: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  filterPill: {
    minWidth: '120px',
    fontSize: '14px',
  },
  customFilterPill: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    ...shorthands.padding('6px', '8px'),
    ...shorthands.gap('4px'),
    fontSize: '14px',
    fontWeight: '400',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  filterPillLabel: {
    color: tokens.colorNeutralForeground2,
    fontWeight: '600',
  },
  filterPillValue: {
    color: tokens.colorNeutralForeground1,
  },
  filterPillChevron: {
    color: tokens.colorNeutralForeground2,
  },
  filterPillClear: {
    color: tokens.colorNeutralForeground2,
    cursor: 'pointer',
    '&:hover': {
      color: tokens.colorNeutralForeground1,
    },
  },
  searchBox: {
    minWidth: '200px',
  },
  table: {
    backgroundColor: tokens.colorNeutralBackground1,
    width: '100%',
    borderSpacing: '0',
    '& .fui-TableHeaderCell': {
      ...shorthands.padding('12px', '16px'),
      fontSize: '14px',
      fontWeight: '600',
      backgroundColor: tokens.colorNeutralBackground2,
      textAlign: 'left',
      verticalAlign: 'middle',
    },
    '& .fui-TableHeaderCell:first-child': {
      width: '48px',
      textAlign: 'center',
      ...shorthands.padding('12px', '8px'),
    },
    '& .fui-TableCell': {
      ...shorthands.padding('16px'),
      borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
      fontSize: '14px',
      verticalAlign: 'middle',
    },
    '& .fui-TableSelectionCell': {
      width: '48px',
      textAlign: 'center',
      ...shorthands.padding('16px', '8px'),
      verticalAlign: 'middle',
    },
    '& .fui-TableRow': {
      '&:hover': {
        backgroundColor: tokens.colorNeutralBackground1Hover,
      },
    },
  },
  projectIdLink: {
    fontWeight: tokens.fontWeightSemibold,
    cursor: 'pointer',
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  statusBadge: {
    borderRadius: tokens.borderRadiusSmall,
  },
  approvedBadge: {
    backgroundColor: tokens.colorPaletteGreenBackground2,
    color: tokens.colorPaletteGreenForeground2,
  },
  submittedBadge: {
    backgroundColor: tokens.colorPaletteYellowBackground2,
    color: tokens.colorPaletteYellowForeground2,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('16px', '24px'),
    flexShrink: 0,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  paginationLeft: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  paginationRight: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  overlay: {
    position: 'fixed',
    top: '48px', // Account for top bar
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 999,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  },
  overlayVisible: {
    opacity: 1,
    visibility: 'visible',
  },
  detailsPanel: {
    position: 'fixed',
    top: '60px', // Account for top bar
    right: '0',
    width: '480px',
    height: 'calc(100vh - 60px)',
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderLeft('1px', 'solid', tokens.colorNeutralStroke2),
    boxShadow: tokens.shadow28,
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease',
    zIndex: 1000,
    overflow: 'auto',
  },
  detailsPanelOpen: {
    transform: 'translateX(0)',
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('20px', '24px'),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke2),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  detailsContent: {
    ...shorthands.padding('24px'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
  },
  detailsField: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('12px', '0'),
    borderBottom: `1px solid ${tokens.colorNeutralStroke3}`,
  },
})

interface IntakeItem {
  projectId: string
  intakeId: string
  title: string
  engineer: string
  adoId: string
  siteType: string
  status: 'Approved' | 'IntakeSubmitted'
  comments: string
  createdOn: string
  description?: string
  priority?: string
  estimatedDuration?: string
}

const mockIntakeData: IntakeItem[] = [
  {
    projectId: '22',
    intakeId: '23',
    title: 'test_lan_port_exp',
    engineer: 'Deepak Yadav',
    adoId: '123132132',
    siteType: 'Brownfield',
    status: 'IntakeSubmitted',
    comments: '--',
    createdOn: '10/1/2024 3:49:00 pm',
    description: 'Testing LAN port expansion for data center connectivity',
    priority: 'Medium',
    estimatedDuration: '4 weeks',
  },
  {
    projectId: '2',
    intakeId: '3',
    title: '2890-IND - KP Tower',
    engineer: 'Sandeep Daitha (Tata Consultancy Services Limited)',
    adoId: '10592812',
    siteType: 'Greenfield',
    status: 'IntakeSubmitted',
    comments: '--',
    createdOn: '17/4/2023 10:24:00 am',
    description: 'New office setup in KP Tower, India with complete network infrastructure',
    priority: 'High',
    estimatedDuration: '8 weeks',
  },
  {
    projectId: '1',
    intakeId: '2',
    title: 'AHSI Hillsboro new LAN Design',
    engineer: 'Purushotham Jilakara (Tata Consultancy Services Limited)',
    adoId: '10443165',
    siteType: 'Greenfield',
    status: 'Approved',
    comments: 'WAN and LAN Design Request',
    createdOn: '23/3/2023 3:56:00 am',
    description: 'Complete LAN design for new AHSI facility in Hillsboro',
    priority: 'High',
    estimatedDuration: '6 weeks',
  },
]

// FilterPill Component
interface FilterPillProps {
  label: string
  value: string
  options: string[]
  onValueChange: (value: string) => void
  onClear: () => void
}

function FilterPill({ label, value, options, onValueChange, onClear }: FilterPillProps) {
  const styles = useStyles()

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <div className={styles.customFilterPill}>
          <span className={styles.filterPillLabel}>{label}</span>
          {value && (
            <>
              <span className={styles.filterPillValue}>{value}</span>
              <Dismiss16Regular 
                className={styles.filterPillClear}
                onClick={(e) => {
                  e.stopPropagation()
                  onClear()
                }}
              />
            </>
          )}
          {!value && <ChevronDown16Regular className={styles.filterPillChevron} />}
          {value && <ChevronDown16Regular className={styles.filterPillChevron} />}
        </div>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem onClick={() => onValueChange('')}>
            All {label}s
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} onClick={() => onValueChange(option)}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export default function IntakeView() {
  const styles = useStyles()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [intakeItems] = useState<IntakeItem[]>(mockIntakeData)
  const [engineerFilter, setEngineerFilter] = useState<string>('')
  const [siteTypeFilter, setSiteTypeFilter] = useState<string>('')

  const selectedProject = selectedProjectId 
    ? intakeItems.find(item => item.projectId === selectedProjectId)
    : null

  // Get unique values for filters
  const uniqueEngineers = Array.from(new Set(intakeItems.map(item => item.engineer.split(' (')[0])))
  const uniqueSiteTypes = Array.from(new Set(intakeItems.map(item => item.siteType)))

  const filteredItems = intakeItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.engineer.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesEngineer = !engineerFilter || item.engineer.toLowerCase().includes(engineerFilter.toLowerCase())
    const matchesSiteType = !siteTypeFilter || item.siteType === siteTypeFilter
    
    return matchesSearch && matchesEngineer && matchesSiteType
  })

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(selectedProjectId === projectId ? null : projectId)
  }

  const handleCreateDesign = (projectId: string) => {
    navigate(`/design/${projectId}`)
  }

  const closeDetailsPanel = () => {
    setSelectedProjectId(null)
  }

  const getStatusBadge = (status: string) => {
    if (status === 'Approved') {
      return (
        <Badge
          appearance="filled"
          color="success"
          icon={<CheckmarkCircle16Filled />}
          className={styles.approvedBadge}
        >
          Approved
        </Badge>
      )
    }
    return (
      <Badge
        appearance="filled"
        color="warning"
        icon={<Circle16Regular />}
        className={styles.submittedBadge}
      >
        IntakeSubmitted
      </Badge>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.leftToolbar}>
            <Input
              placeholder="Search Review Request"
              value={searchTerm}
              onChange={(_, data) => setSearchTerm(data.value)}
              contentBefore={<Search24Regular />}
              className={styles.searchBox}
            />
            <FilterPill
              label="Engineer"
              value={engineerFilter}
              options={uniqueEngineers}
              onValueChange={setEngineerFilter}
              onClear={() => setEngineerFilter('')}
            />
            <FilterPill
              label="Site Type"
              value={siteTypeFilter}
              options={uniqueSiteTypes}
              onValueChange={setSiteTypeFilter}
              onClear={() => setSiteTypeFilter('')}
            />
          </div>
        </div>

        {/* Info Section */}
        <div style={{ padding: '16px 24px', backgroundColor: tokens.colorNeutralBackground2, borderBottom: `1px solid ${tokens.colorNeutralStroke2}` }}>
          <Body2 style={{ color: tokens.colorNeutralForeground2 }}>
            ℹ️ The below list provides details of all intake forms created for Design And BOM.
          </Body2>
        </div>

        {/* Data Table */}
        <div style={{ flex: 1, overflow: 'auto', padding: '0 24px' }}>
          <Table className={styles.table} sortable>
            <TableHeader>
              <TableRow>
                <TableHeaderCell style={{ width: '48px', textAlign: 'center', padding: '12px 8px' }}>
                  <Checkbox />
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Project ID
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Intake ID
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Title
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Engineer
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    ADO ID
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Site Type
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Status
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Comments
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>
                  <TableCellLayout>
                    Created On
                  </TableCellLayout>
                </TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.projectId}>
                  <TableSelectionCell>
                    <Checkbox />
                  </TableSelectionCell>
                  <TableCell>
                    <Link
                      className={styles.projectIdLink}
                      onClick={() => handleProjectClick(item.projectId)}
                    >
                      {item.projectId}
                    </Link>
                  </TableCell>
                  <TableCell>{item.intakeId}</TableCell>
                  <TableCell>
                    <TableCellLayout truncate title={item.title}>
                      {item.title}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <TableCellLayout truncate title={item.engineer}>
                      {item.engineer}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>{item.adoId}</TableCell>
                  <TableCell>{item.siteType}</TableCell>
                  <TableCell>
                    {getStatusBadge(item.status)}
                  </TableCell>
                  <TableCell>{item.comments}</TableCell>
                  <TableCell>{item.createdOn}</TableCell>
                  <TableCell>
                    <Button 
                      size="small" 
                      appearance={item.status === 'Approved' ? "primary" : "subtle"}
                      icon={<BotSparkle20Regular />}
                      onClick={() => handleCreateDesign(item.projectId)}
                      disabled={item.status !== 'Approved'}
                      title={item.status === 'Approved' ? "Create Design with AI" : "Approval required to create design"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <div className={styles.paginationLeft}>
            <Body2>Total Count: {filteredItems.length}</Body2>
          </div>
          <div className={styles.paginationRight}>
            <Button appearance="subtle" size="small">Prev</Button>
            <Body2>Page 1 / 1</Body2>
            <Button appearance="subtle" size="small">Next</Button>
            <Body2>Display</Body2>
            <Combobox
              value="10"
              size="small"
              style={{ width: '60px' }}
            >
              <Option value="10">10</Option>
              <Option value="25">25</Option>
              <Option value="50">50</Option>
            </Combobox>
            <Body2>items per page</Body2>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${selectedProjectId ? styles.overlayVisible : ''}`}
        onClick={closeDetailsPanel}
      />

      {/* Details Panel */}
      <div className={`${styles.detailsPanel} ${selectedProjectId ? styles.detailsPanelOpen : ''}`}>
        {selectedProject && (
          <>
            <div className={styles.detailsHeader}>
              <Title3>Project Details</Title3>
              <Button
                appearance="subtle"
                icon={<DismissRegular />}
                onClick={closeDetailsPanel}
              />
            </div>
            <div className={styles.detailsContent}>
              <Card>
                <CardHeader>
                  <Body1><strong>Project Information</strong></Body1>
                </CardHeader>
                <div style={{ padding: '16px' }}>
                  <div className={styles.detailsSection}>
                    <div className={styles.detailsField}>
                      <Body2>Project ID:</Body2>
                      <Body1><strong>{selectedProject.projectId}</strong></Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>Intake ID:</Body2>
                      <Body1>{selectedProject.intakeId}</Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>Title:</Body2>
                      <Body1>{selectedProject.title}</Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>Status:</Body2>
                      {getStatusBadge(selectedProject.status)}
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <Body1><strong>Project Details</strong></Body1>
                </CardHeader>
                <div style={{ padding: '16px' }}>
                  <div className={styles.detailsSection}>
                    <div className={styles.detailsField}>
                      <Body2>Engineer:</Body2>
                      <Body1>{selectedProject.engineer}</Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>ADO ID:</Body2>
                      <Body1>{selectedProject.adoId}</Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>Site Type:</Body2>
                      <Body1>{selectedProject.siteType}</Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>Priority:</Body2>
                      <Body1>{selectedProject.priority}</Body1>
                    </div>
                    <div className={styles.detailsField}>
                      <Body2>Est. Duration:</Body2>
                      <Body1>{selectedProject.estimatedDuration}</Body1>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <Body1><strong>Description</strong></Body1>
                </CardHeader>
                <div style={{ padding: '16px' }}>
                  <Body1>{selectedProject.description}</Body1>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <Body1><strong>Comments</strong></Body1>
                </CardHeader>
                <div style={{ padding: '16px' }}>
                  <Body1>{selectedProject.comments}</Body1>
                </div>
              </Card>

              <div style={{ marginTop: '24px' }}>
                <Button 
                  appearance={selectedProject.status === 'Approved' ? "primary" : "subtle"}
                  style={{ width: '100%' }}
                  onClick={() => handleCreateDesign(selectedProject.projectId)}
                  disabled={selectedProject.status !== 'Approved'}
                  icon={<BotSparkle20Regular />}
                >
                  Create Design with AI
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
