import React from 'react'
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableCellLayout,
  Button,
  Input,
  makeStyles,
  shorthands,
  tokens,
  Body1,
  Body2,
  Badge,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Combobox,
  Option,
} from '@fluentui/react-components'
import {
  DesignIdeas24Regular,
  Eye24Regular,
  Search24Regular,
  ChevronDown16Regular,
  Dismiss16Regular,
} from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
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
  searchBox: {
    minWidth: '200px',
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
  infoSection: {
    ...shorthands.padding('16px', '24px'),
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  tableContainer: {
    flex: 1,
    ...shorthands.overflow('auto'),
    ...shorthands.padding('0', '24px'),
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
    '& .fui-TableCell': {
      ...shorthands.padding('16px'),
      borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
      fontSize: '14px',
      verticalAlign: 'middle',
    },
    '& .fui-TableRow': {
      '&:hover': {
        backgroundColor: tokens.colorNeutralBackground1Hover,
      },
    },
  },
  actionButton: {
    minWidth: '32px',
    width: '32px',
    height: '32px',
    ...shorthands.margin('0', '2px'),
  },
  actionsCell: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  regionBadge: {
    fontSize: '12px',
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
})

// Type definition for site data
interface SiteData {
  id: string
  name: string
  siteCode: string
  siteType: string
  siteTypeDescription: string
  region: string
  physicalAddress: string
  hasApprovedDesign: boolean
}

// Mock data for the sites
const mockSiteData: SiteData[] = [
  {
    id: 'SITE-001',
    name: 'Seattle HQ Campus',
    siteCode: 'SEA-HQ-01',
    siteType: 'Campus',
    siteTypeDescription: 'Corporate Headquarters with multiple buildings',
    region: 'US West',
    physicalAddress: '1 Microsoft Way, Redmond, WA 98052',
    hasApprovedDesign: true,
  },
  {
    id: 'SITE-002',
    name: 'Austin Data Center',
    siteCode: 'AUS-DC-01',
    siteType: 'Data Center',
    siteTypeDescription: 'Primary data center facility with redundant connectivity',
    region: 'US Central',
    physicalAddress: '11501 Domain Drive, Austin, TX 78758',
    hasApprovedDesign: true,
  },
  {
    id: 'SITE-003',
    name: 'London Office',
    siteCode: 'LON-OF-01',
    siteType: 'Branch Office',
    siteTypeDescription: 'Regional office with local workforce',
    region: 'EMEA',
    physicalAddress: '21 Collier Street, London N1 9BE, UK',
    hasApprovedDesign: false,
  },
  {
    id: 'SITE-004',
    name: 'Tokyo Research Center',
    siteCode: 'TKY-RC-01',
    siteType: 'Research Facility',
    siteTypeDescription: 'Advanced research and development facility',
    region: 'APAC',
    physicalAddress: '3-2-5 Kasumigaseki, Chiyoda City, Tokyo 100-6178, Japan',
    hasApprovedDesign: true,
  },
  {
    id: 'SITE-005',
    name: 'Sydney Branch',
    siteCode: 'SYD-BR-01',
    siteType: 'Branch Office',
    siteTypeDescription: 'Regional branch office for APAC operations',
    region: 'APAC',
    physicalAddress: '1 Denison Street, North Sydney NSW 2060, Australia',
    hasApprovedDesign: true,
  },
  {
    id: 'SITE-006',
    name: 'Frankfurt Hub',
    siteCode: 'FRA-HB-01',
    siteType: 'Distribution Hub',
    siteTypeDescription: 'Logistics and distribution center for EMEA',
    region: 'EMEA',
    physicalAddress: 'Walter-Gropius-Straße 5, 80807 München, Germany',
    hasApprovedDesign: false,
  },
  {
    id: 'SITE-007',
    name: 'Silicon Valley Lab',
    siteCode: 'SV-LAB-01',
    siteType: 'Research Facility',
    siteTypeDescription: 'Innovation lab for emerging technologies',
    region: 'US West',
    physicalAddress: '1065 La Avenida Street, Mountain View, CA 94043',
    hasApprovedDesign: true,
  },
  {
    id: 'SITE-008',
    name: 'Chicago Warehouse',
    siteCode: 'CHI-WH-01',
    siteType: 'Warehouse',
    siteTypeDescription: 'Central distribution warehouse facility',
    region: 'US Central',
    physicalAddress: '500 W Madison Street, Chicago, IL 60661',
    hasApprovedDesign: false,
  }
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
          {options.map((option) => (
            <MenuItem 
              key={option} 
              onClick={() => onValueChange(option)}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export default function DesignStore() {
  const styles = useStyles()
  const navigate = useNavigate()

  // Search and filter state
  const [searchTerm, setSearchTerm] = React.useState('')
  const [siteTypeFilter, setSiteTypeFilter] = React.useState('')
  const [regionFilter, setRegionFilter] = React.useState('')

  // Get unique values for filters
  const uniqueSiteTypes = React.useMemo(() => 
    [...new Set(mockSiteData.map(site => site.siteType))], [])
  const uniqueRegions = React.useMemo(() => 
    [...new Set(mockSiteData.map(site => site.region))], [])

  // Filter and search data
  const filteredData = React.useMemo(() => {
    return mockSiteData.filter(site => {
      const matchesSearch = searchTerm === '' || 
        site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.siteCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.physicalAddress.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesSiteType = siteTypeFilter === '' || site.siteType === siteTypeFilter
      const matchesRegion = regionFilter === '' || site.region === regionFilter
      
      return matchesSearch && matchesSiteType && matchesRegion
    })
  }, [searchTerm, siteTypeFilter, regionFilter])

  const handleOpenDesign = (siteCode: string) => {
    // Navigate to Design Editor with the site's design
    navigate(`/design/${siteCode}`)
  }

  const handleViewObservability = (siteName: string) => {
    // In a real application, this would redirect to observability tools
    // For now, we'll show an alert
    alert(`Opening observability tools for ${siteName}...\n\nThis would redirect to external monitoring dashboards in a real implementation.`)
  }

  const getRegionColor = (region: string): "brand" | "success" | "warning" | "danger" | "subtle" => {
    switch (region) {
      case 'US West':
        return 'brand'
      case 'US Central':
        return 'success'
      case 'EMEA':
        return 'warning'
      case 'APAC':
        return 'danger'
      default:
        return 'subtle'
    }
  }

  return (
    <div className={styles.container}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.leftToolbar}>
          <Input
            placeholder="Search sites..."
            value={searchTerm}
            onChange={(_, data) => setSearchTerm(data.value)}
            contentBefore={<Search24Regular />}
            className={styles.searchBox}
          />
          <FilterPill
            label="Site Type"
            value={siteTypeFilter}
            options={uniqueSiteTypes}
            onValueChange={setSiteTypeFilter}
            onClear={() => setSiteTypeFilter('')}
          />
          <FilterPill
            label="Region"
            value={regionFilter}
            options={uniqueRegions}
            onValueChange={setRegionFilter}
            onClear={() => setRegionFilter('')}
          />
        </div>
        <div className={styles.rightToolbar}>
          {/* Add any additional toolbar buttons here if needed */}
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.infoSection}>
        <Body2 style={{ color: tokens.colorNeutralForeground2 }}>
          ℹ️ The below list provides details of all sites in the design store.
        </Body2>
      </div>

      {/* Data Table */}
      <div className={styles.tableContainer}>
        <Table className={styles.table} sortable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>
                <TableCellLayout>Name</TableCellLayout>
              </TableHeaderCell>
              <TableHeaderCell>
                <TableCellLayout>Site Code</TableCellLayout>
              </TableHeaderCell>
              <TableHeaderCell>
                <TableCellLayout>Site Type</TableCellLayout>
              </TableHeaderCell>
              <TableHeaderCell>
                <TableCellLayout>Site Type Description</TableCellLayout>
              </TableHeaderCell>
              <TableHeaderCell>
                <TableCellLayout>Region</TableCellLayout>
              </TableHeaderCell>
              <TableHeaderCell>
                <TableCellLayout>Physical Address</TableCellLayout>
              </TableHeaderCell>
              <TableHeaderCell>
                <TableCellLayout>Actions</TableCellLayout>
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((site) => (
              <TableRow key={site.id}>
                <TableCell>
                  <TableCellLayout>
                    <Body1 style={{ fontWeight: '600' }}>{site.name}</Body1>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <Body1 style={{ fontFamily: 'monospace', fontSize: '13px' }}>
                      {site.siteCode}
                    </Body1>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <Body1 style={{ fontWeight: '500' }}>{site.siteType}</Body1>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <Body1 style={{ fontSize: '13px', color: tokens.colorNeutralForeground2 }}>
                      {site.siteTypeDescription}
                    </Body1>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <Badge 
                      appearance="filled" 
                      color={getRegionColor(site.region)}
                      className={styles.regionBadge}
                    >
                      {site.region}
                    </Badge>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <Body1 style={{ fontSize: '13px' }}>{site.physicalAddress}</Body1>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <div className={styles.actionsCell}>
                      <Button
                        appearance="subtle"
                        icon={<DesignIdeas24Regular />}
                        className={styles.actionButton}
                        title="Open Design Editor"
                        disabled={!site.hasApprovedDesign}
                        onClick={() => handleOpenDesign(site.siteCode)}
                        aria-label={`Open design editor for ${site.name}`}
                      />
                      <Button
                        appearance="subtle"
                        icon={<Eye24Regular />}
                        className={styles.actionButton}
                        title="View in Observability Tools"
                        onClick={() => handleViewObservability(site.name)}
                        aria-label={`View observability tools for ${site.name}`}
                      />
                    </div>
                  </TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.paginationLeft}>
          <Body2>Total Count: {filteredData.length}</Body2>
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
  )
}
