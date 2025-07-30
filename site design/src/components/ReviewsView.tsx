import { useState } from 'react'
import {
  Button,
  Input,
  Card,
  makeStyles,
  shorthands,
  tokens,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Badge,
  Dropdown,
  Option,
} from '@fluentui/react-components'
import {
  Search24Regular,
  TableSettings24Regular,
  ArrowSort24Regular,
} from '@fluentui/react-icons'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
  },
  filtersSection: {
    display: 'flex',
    ...shorthands.gap('12px'),
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  searchBox: {
    minWidth: '300px',
  },
  filterDropdown: {
    minWidth: '120px',
  },
  tableContainer: {
    ...shorthands.overflow('auto'),
  },
  statusBadge: {
    minWidth: '80px',
  },
  linkCell: {
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  actionsCell: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

interface ReviewItem {
  reviewId: string
  projectNumber: string
  projectName: string
  status: 'Submitted' | 'In Review' | 'Approved' | 'Rejected'
  author: string
  assignedTo: string
  feedbackCycle: string
  siteName: string
  region: string
  serviceLine: string
  submittedOn: string
}

const mockReviewData: ReviewItem[] = [
  {
    reviewId: '1',
    projectNumber: '13433630',
    projectName: '<ADO Title>',
    status: 'Submitted',
    author: 'John Doe',
    assignedTo: 'Jane Smith',
    feedbackCycle: 'Initial',
    siteName: 'HYD -CAMPUS 4',
    region: 'Asia',
    serviceLine: 'LAN, WAN, WLAN',
    submittedOn: '4/25/2025',
  },
]

export default function ReviewsView() {
  const styles = useStyles()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [serviceLineFilter, setServiceLineFilter] = useState('')
  const [regionFilter, setRegionFilter] = useState('')
  const [authorFilter, setAuthorFilter] = useState('')

  const filteredReviews = mockReviewData.filter(review => {
    return (
      (searchTerm === '' || review.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
       review.projectNumber.includes(searchTerm)) &&
      (statusFilter === '' || review.status === statusFilter) &&
      (serviceLineFilter === '' || review.serviceLine.includes(serviceLineFilter)) &&
      (regionFilter === '' || review.region === regionFilter) &&
      (authorFilter === '' || review.author.includes(authorFilter))
    )
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Submitted': { appearance: 'outline' as const, color: 'brand' as const },
      'In Review': { appearance: 'filled' as const, color: 'warning' as const },
      'Approved': { appearance: 'filled' as const, color: 'success' as const },
      'Rejected': { appearance: 'filled' as const, color: 'danger' as const },
    }
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Submitted']
    return (
      <Badge appearance={config.appearance} color={config.color} className={styles.statusBadge}>
        {status}
      </Badge>
    )
  }

  return (
    <div className={styles.container}>
      {/* Filters Section */}
      <Card>
        <div style={{ padding: '16px' }}>
          <div className={styles.filtersSection}>
            <Input
              className={styles.searchBox}
              placeholder="Search Review Request"
              value={searchTerm}
              onChange={(_, data) => setSearchTerm(data.value)}
              contentBefore={<Search24Regular />}
            />
            
            <Dropdown
              className={styles.filterDropdown}
              placeholder="Status"
              value={statusFilter}
              onOptionSelect={(_, data) => setStatusFilter(data.optionValue as string)}
            >
              <Option value="">All Status</Option>
              <Option value="Submitted">Submitted</Option>
              <Option value="In Review">In Review</Option>
              <Option value="Approved">Approved</Option>
              <Option value="Rejected">Rejected</Option>
            </Dropdown>

            <Dropdown
              className={styles.filterDropdown}
              placeholder="Service Line"
              value={serviceLineFilter}
              onOptionSelect={(_, data) => setServiceLineFilter(data.optionValue as string)}
            >
              <Option value="">Filter value</Option>
              <Option value="LAN">LAN</Option>
              <Option value="WAN">WAN</Option>
              <Option value="WLAN">WLAN</Option>
            </Dropdown>

            <Dropdown
              className={styles.filterDropdown}
              placeholder="Region"
              value={regionFilter}
              onOptionSelect={(_, data) => setRegionFilter(data.optionValue as string)}
            >
              <Option value="">Filter value</Option>
              <Option value="Asia">Asia</Option>
              <Option value="Europe">Europe</Option>
              <Option value="Americas">Americas</Option>
            </Dropdown>

            <Dropdown
              className={styles.filterDropdown}
              placeholder="Author"
              value={authorFilter}
              onOptionSelect={(_, data) => setAuthorFilter(data.optionValue as string)}
            >
              <Option value="">Filter value</Option>
              <Option value="John">John Doe</Option>
              <Option value="Jane">Jane Smith</Option>
            </Dropdown>

            <Button appearance="subtle" icon={<TableSettings24Regular />}>
              Columns
            </Button>
          </div>
        </div>
      </Card>

      {/* Reviews Table */}
      <Card>
        <div className={styles.tableContainer}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>
                  Review ID <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Project Number <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Project Name <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Status <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Author <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Assigned To <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>Feedback Cycle</TableHeaderCell>
                <TableHeaderCell>
                  Site Name <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Region <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Service Line <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Submitted on <ArrowSort24Regular style={{ marginLeft: '4px' }} />
                </TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow key={review.reviewId}>
                  <TableCell>
                    <a href="#" className={styles.linkCell}>{review.reviewId}</a>
                  </TableCell>
                  <TableCell>
                    <a href="#" className={styles.linkCell}>{review.projectNumber}</a>
                  </TableCell>
                  <TableCell>{review.projectName}</TableCell>
                  <TableCell>{getStatusBadge(review.status)}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        backgroundColor: tokens.colorBrandBackground2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'white'
                      }}>
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      {review.author}
                    </div>
                  </TableCell>
                  <TableCell>{review.assignedTo}</TableCell>
                  <TableCell>{review.feedbackCycle}</TableCell>
                  <TableCell>{review.siteName}</TableCell>
                  <TableCell>{review.region}</TableCell>
                  <TableCell>{review.serviceLine}</TableCell>
                  <TableCell>{review.submittedOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
