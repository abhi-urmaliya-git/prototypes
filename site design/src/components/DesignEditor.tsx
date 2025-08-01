import { useState } from 'react'
import {
  Button,
  Title3,
  Body1,
  Body2,
  Card,
  CardHeader,
  makeStyles,
  shorthands,
  tokens,
  Divider,
  TabList,
  Tab,
  Textarea,
  Tree,
  TreeItem,
  TreeItemLayout,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  Field,
  Dropdown,
  Option,
} from '@fluentui/react-components'
import {
  Save24Regular,
  TableSimple24Regular,
  Code24Regular,
  Document24Regular,
  BuildingMultiple24Regular,
  Building24Regular,
  Server24Regular,
  Router24Regular,
  Circle16Regular,
  ZoomIn24Regular,
  ZoomOut24Regular,
  ZoomFit24Regular,
  Cursor24Regular,
  Add24Regular,
  DocumentTable24Regular,
  Map24Regular,
  Checkmark24Regular,
  LineHorizontal120Regular,
  BotSparkle24Regular,
  CheckmarkCircle24Regular,
  Send24Regular,
} from '@fluentui/react-icons'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: 'calc(100vh - 125px)',
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  leftPanel: {
    width: '20%',
    minWidth: '280px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  centerCanvas: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  rightPanel: {
    width: '20%',
    minWidth: '280px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  canvasToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('8px', '16px'),
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    minHeight: '40px',
    height: '40px',
    flexShrink: 0,
  },
  canvasToolbarLeft: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  canvasToolbarRight: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  canvasViewport: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    backgroundImage: `
      radial-gradient(circle, ${tokens.colorNeutralStroke3} 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
  },
  panelTabs: {
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    ...shorthands.padding('4px', '16px'),
    display: 'flex',
    alignItems: 'center',
    minHeight: '40px',
    height: '40px',
    flexShrink: 0,
  },
  panelContent: {
    flex: 1,
    ...shorthands.padding('2px'),
    overflow: 'auto',
    minHeight: 0,
  },
  panelContentCode: {
    flex: 1,
    ...shorthands.padding('2px'),
    overflow: 'hidden',
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  treeItem: {
    '&[aria-expanded="true"] .tree-icon': {
      transform: 'rotate(90deg)',
    },
    '&[aria-selected="true"]': {
      backgroundColor: tokens.colorBrandBackground2,
      '&:hover': {
        backgroundColor: tokens.colorBrandBackground2,
      },
    },
  },
  deviceCard: {
    marginBottom: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  selectedDevice: {
    backgroundColor: tokens.colorBrandBackground2,
  },
  rightPanelActions: {
    ...shorthands.padding('4px', '16px'),
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    display: 'flex',
    flexDirection: 'row',
    ...shorthands.gap('4px'),
    flexShrink: 0,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  hierarchyLevel: {
    ...shorthands.padding('4px', '8px'),
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusSmall,
    fontSize: '12px',
    fontWeight: '600',
  },
  deviceIcon: {
    color: tokens.colorBrandForeground1,
  },
  codeEditor: {
    fontFamily: 'Consolas, "Courier New", monospace',
    fontSize: '12px',
    width: '100%',
    height: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusSmall,
    resize: 'none',
    overflow: 'auto',
    boxSizing: 'border-box',
    flex: '1',
    minHeight: '0',
  },
  // Canvas device styles
  canvasDevice: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    backgroundColor: tokens.colorNeutralBackground1,
    border: `2px solid ${tokens.colorBrandStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: tokens.shadow4,
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  canvasDeviceIcon: {
    fontSize: '24px',
    color: tokens.colorBrandForeground1,
    marginBottom: '4px',
  },
  deviceLabel: {
    fontSize: '10px',
    fontWeight: '600',
    textAlign: 'center',
    color: tokens.colorNeutralForeground1,
    lineHeight: '1.2',
  },
  deviceConnection: {
    position: 'absolute',
    stroke: tokens.colorBrandStroke1,
    strokeWidth: '2',
    fill: 'none',
    pointerEvents: 'none',
  },
  connectionLabel: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: '500',
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('2px', '4px'),
    borderRadius: tokens.borderRadiusSmall,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
})

interface HierarchyNode {
  id: string
  name: string
  type: 'building' | 'floor' | 'cableroom' | 'rack' | 'slot'
  children?: HierarchyNode[]
  devices?: Device[]
}

interface Device {
  id: string
  name: string
  type: 'switch' | 'router' | 'server' | 'firewall'
  status: 'online' | 'offline' | 'warning'
  ports?: number
  location?: string
}

interface CanvasDevice {
  id: string
  name: string
  type: 'switch' | 'router' | 'server' | 'firewall' | 'wireless-controller'
  x: number
  y: number
  ports?: string[]
}

interface CanvasConnection {
  id: string
  from: string
  to: string
  fromPort?: string
  toPort?: string
  type: 'ethernet' | 'fiber'
  speed?: string
  label?: string
}

const mockHierarchy: HierarchyNode[] = [
  {
    id: 'building1',
    name: 'Main Building',
    type: 'building',
    children: [
      {
        id: 'floor1',
        name: 'Floor 1',
        type: 'floor',
        children: [
          {
            id: 'cableroom1',
            name: 'Cable Room A',
            type: 'cableroom',
            children: [
              {
                id: 'rack1',
                name: 'Rack A1',
                type: 'rack',
                children: [
                  {
                    id: 'slot1',
                    name: 'Slot 1',
                    type: 'slot',
                    devices: [
                      { id: 'sw1', name: 'Core Switch 01', type: 'switch', status: 'online', ports: 48 },
                      { id: 'rt1', name: 'Router 01', type: 'router', status: 'online', ports: 24 },
                    ]
                  },
                  {
                    id: 'slot2',
                    name: 'Slot 2',
                    type: 'slot',
                    devices: [
                      { id: 'fw1', name: 'Firewall 01', type: 'firewall', status: 'warning', ports: 16 },
                    ]
                  }
                ]
              },
              {
                id: 'rack2',
                name: 'Rack A2',
                type: 'rack',
                children: [
                  {
                    id: 'slot3',
                    name: 'Slot 1',
                    type: 'slot',
                    devices: [
                      { id: 'sv1', name: 'Server 01', type: 'server', status: 'online' },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

const mockProjectData = {
  projectId: '22',
  title: 'test_lan_port_exp',
  engineer: 'Deepak Yadav',
  status: 'Approved',
  siteType: 'Brownfield',
  description: 'Testing LAN port expansion for data center connectivity',
  priority: 'Medium',
  estimatedDuration: '4 weeks',
}

const mockDesignData = {
  nodes: [
    { id: 'sw1', name: 'Core Switch 01', type: 'switch', location: 'Rack A1/Slot 1' },
    { id: 'rt1', name: 'Router 01', type: 'router', location: 'Rack A1/Slot 1' },
    { id: 'fw1', name: 'Firewall 01', type: 'firewall', location: 'Rack A1/Slot 2' },
  ],
  connections: [
    { from: 'sw1', to: 'rt1', type: 'ethernet', speed: '10Gbps' },
    { from: 'rt1', to: 'fw1', type: 'ethernet', speed: '1Gbps' },
  ]
}

// Canvas devices positioned like the network diagram
const canvasDevices: CanvasDevice[] = [
  // Top routers
  { id: 'router1', name: 'TenGigE0/0/0/2', type: 'router', x: 150, y: 80 },
  { id: 'router2', name: 'Te0/0/0/1', type: 'router', x: 400, y: 60 },
  { id: 'router3', name: 'TenGigE0/0/0/2', type: 'router', x: 650, y: 80 },
  
  // Middle switch and router
  { id: 'switch1', name: 'label2\nlabel1', type: 'switch', x: 180, y: 200 },
  { id: 'switch2', name: '1/1/48', type: 'switch', x: 420, y: 200 },
  { id: 'switch3', name: '1/1/48', type: 'switch', x: 620, y: 200 },
  
  // Bottom wireless controllers
  { id: 'wlc1', name: 'GE0/0/2', type: 'wireless-controller', x: 150, y: 350 },
  { id: 'wlc2', name: 'GE0/0/2', type: 'wireless-controller', x: 620, y: 350 },
]

const canvasConnections: CanvasConnection[] = [
  // Top level connections
  { id: 'conn1', from: 'router1', to: 'router2', type: 'ethernet', label: 'Te0/0/0/1' },
  { id: 'conn2', from: 'router2', to: 'router3', type: 'ethernet', label: 'Te0/0/0/1' },
  
  // Middle level connections
  { id: 'conn3', from: 'router1', to: 'switch1', type: 'ethernet', label: '1/1/10' },
  { id: 'conn4', from: 'router2', to: 'switch2', type: 'ethernet', label: '1/1/48' },
  { id: 'conn5', from: 'router3', to: 'switch3', type: 'ethernet', label: '1/1/10' },
  
  // Cross connections
  { id: 'conn6', from: 'switch1', to: 'switch3', type: 'ethernet', label: '1/1/50' },
  { id: 'conn7', from: 'switch2', to: 'switch3', type: 'ethernet', label: '1/1/40' },
  
  // Bottom connections
  { id: 'conn8', from: 'switch1', to: 'wlc1', type: 'ethernet', label: 'GE0/0/3' },
  { id: 'conn9', from: 'switch3', to: 'wlc2', type: 'ethernet', label: 'GE0/0/3' },
]

export default function DesignEditor() {
  const styles = useStyles()
  const [leftTab, setLeftTab] = useState('generate')
  const [rightTab, setRightTab] = useState('table')
  const [selectedHierarchy, setSelectedHierarchy] = useState<HierarchyNode | null>(null)
  // Generate tab state
  const [designTarget, setDesignTarget] = useState<string>('wan')
  const [designPrompt, setDesignPrompt] = useState('')

  const getHierarchyIcon = (type: string) => {
    switch (type) {
      case 'building': return <BuildingMultiple24Regular />
      case 'floor': return <Building24Regular />
      case 'cableroom': return <Server24Regular />
      case 'rack': return <Server24Regular />
      case 'slot': return <LineHorizontal120Regular />
      default: return <Circle16Regular />
    }
  }

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'switch': return <Router24Regular className={styles.deviceIcon} />
      case 'router': return <Router24Regular className={styles.deviceIcon} />
      case 'firewall': return <Router24Regular className={styles.deviceIcon} />
      case 'server': return <Server24Regular className={styles.deviceIcon} />
      case 'wireless-controller': return <Router24Regular className={styles.deviceIcon} />
      default: return <Circle16Regular />
    }
  }

  const getCanvasDeviceIcon = (type: string) => {
    switch (type) {
      case 'switch': return <Router24Regular />
      case 'router': return <Router24Regular />
      case 'firewall': return <Router24Regular />
      case 'server': return <Server24Regular />
      case 'wireless-controller': return <Router24Regular />
      default: return <Circle16Regular />
    }
  }

  const renderCanvasDevice = (device: CanvasDevice) => (
    <div
      key={device.id}
      className={styles.canvasDevice}
      style={{ left: device.x, top: device.y }}
      title={device.name}
    >
      <div className={styles.canvasDeviceIcon}>
        {getCanvasDeviceIcon(device.type)}
      </div>
      <div className={styles.deviceLabel}>
        {device.name}
      </div>
    </div>
  )

  const renderCanvasConnection = (connection: CanvasConnection, devices: CanvasDevice[]) => {
    const fromDevice = devices.find(d => d.id === connection.from)
    const toDevice = devices.find(d => d.id === connection.to)
    
    if (!fromDevice || !toDevice) return null

    const x1 = fromDevice.x + 40 // Center of device (80px width / 2)
    const y1 = fromDevice.y + 40 // Center of device (80px height / 2)
    const x2 = toDevice.x + 40
    const y2 = toDevice.y + 40

    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2

    return (
      <g key={connection.id}>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className={styles.deviceConnection}
        />
        {connection.label && (
          <text
            x={midX}
            y={midY}
            className={styles.connectionLabel}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="10"
            fill="currentColor"
          >
            {connection.label}
          </text>
        )}
      </g>
    )
  }

  const renderTreeNode = (node: HierarchyNode, level: number = 0): JSX.Element => {
    const hasChildren = node.children && node.children.length > 0
    const isSelected = selectedHierarchy?.id === node.id
    
    return (
      <TreeItem
        key={node.id}
        className={styles.treeItem}
        itemType={hasChildren ? "branch" : "leaf"}
        value={node.id}
        style={isSelected ? { backgroundColor: tokens.colorBrandBackground2 } : undefined}
      >
        <TreeItemLayout 
          iconBefore={getHierarchyIcon(node.type)}
          onClick={() => setSelectedHierarchy(node)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{node.name}</span>
            <Badge appearance="outline" size="small">{node.type}</Badge>
          </div>
        </TreeItemLayout>
        {hasChildren && (
          <Tree>
            {node.children!.map(child => renderTreeNode(child, level + 1))}
          </Tree>
        )}
      </TreeItem>
    )
  }

  const renderGenerateTab = () => {
    const handleGenerate = () => {
      // Simulate AI design generation
      console.log('Generating design with:', { designTarget, designPrompt })
      // In a real application, this would trigger the AI model
      // and update the canvas with the generated design
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
        <Field label="Design Target">
          <Dropdown
            value={designTarget}
            onOptionSelect={(_, data) => setDesignTarget(data.optionValue as string)}
            placeholder="Select design target..."
          >
            <Option value="wan">WAN</Option>
            <Option value="lan">LAN</Option>
            <Option value="wlan">WLAN</Option>
          </Dropdown>
        </Field>

        <Field 
          label="Design Template & Requirements"
        >
          <Textarea
            value={designPrompt}
            onChange={(_, data) => setDesignPrompt(data.value)}
            placeholder="Example: Create a three-tier campus network with redundant core switches, distribution layer with VLANs for different departments, and access layer with PoE switches for wireless APs. Include HSRP for high availability..."
            rows={8}
            resize="vertical"
          />
        </Field>

        <Button
          appearance="primary"
          icon={<BotSparkle24Regular />}
          onClick={handleGenerate}
          disabled={!designTarget || !designPrompt.trim()}
          style={{ alignSelf: 'flex-start' }}
        >
          Generate Design
        </Button>
      </div>
    )
  }

  const renderLayersTab = () => (
    <div>
      <Tree 
        aria-label="Site Hierarchy"
      >
        {mockHierarchy.map(node => renderTreeNode(node))}
      </Tree>
    </div>
  )

  const renderProjectDetailsTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Card>
        <CardHeader>
          <Title3>Project Information</Title3>
        </CardHeader>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Body2>Project ID:</Body2>
              <Body1 style={{ fontWeight: '600' }}>{mockProjectData.projectId}</Body1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Body2>Title:</Body2>
              <Body1>{mockProjectData.title}</Body1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Body2>Engineer:</Body2>
              <Body1>{mockProjectData.engineer}</Body1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Body2>Status:</Body2>
              <Badge appearance="filled" color="success">{mockProjectData.status}</Badge>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Body2>Site Type:</Body2>
              <Body1>{mockProjectData.siteType}</Body1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Body2>Priority:</Body2>
              <Body1>{mockProjectData.priority}</Body1>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <Title3>Description</Title3>
        </CardHeader>
        <div style={{ padding: '16px' }}>
          <Body1>{mockProjectData.description}</Body1>
        </div>
      </Card>
    </div>
  )

  const renderTableTab = () => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ marginBottom: '4px' }}>
        <Title3>Network Devices</Title3>
      </div>
      <div style={{ flex: 1, overflow: 'auto', marginBottom: '4px' }}>
        <Table size="small">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Device</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Location</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDesignData.nodes.map((node) => (
              <TableRow key={node.id}>
                <TableCell>
                  <TableCellLayout media={getDeviceIcon(node.type)}>
                    {node.name}
                  </TableCellLayout>
                </TableCell>
                <TableCell>{node.type}</TableCell>
                <TableCell>{node.location}</TableCell>
                <TableCell>
                  <Badge appearance="filled" color="success">Online</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div style={{ marginBottom: '4px' }}>
        <Title3>Connections</Title3>
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Table size="small">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>From</TableHeaderCell>
              <TableHeaderCell>To</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Speed</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDesignData.connections.map((conn, index) => (
              <TableRow key={index}>
                <TableCell>{conn.from}</TableCell>
                <TableCell>{conn.to}</TableCell>
                <TableCell>{conn.type}</TableCell>
                <TableCell>{conn.speed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )

  const renderJsonTab = () => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Textarea
        className={styles.codeEditor}
        value={JSON.stringify(mockDesignData, null, 2)}
        placeholder="JSON configuration..."
      />
    </div>
  )

  const renderYamlTab = () => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Textarea
        className={styles.codeEditor}
        value={`# Network Design Configuration
nodes:
  - id: sw1
    name: Core Switch 01
    type: switch
    location: Rack A1/Slot 1
  - id: rt1
    name: Router 01
    type: router
    location: Rack A1/Slot 1

connections:
  - from: sw1
    to: rt1
    type: ethernet
    speed: 10Gbps`}
        placeholder="YAML configuration..."
      />
    </div>
  )

  return (
    <div className={styles.container}>
      {/* Left Panel - Generate, Layers & Project Details */}
      <div className={styles.leftPanel}>
        <div className={styles.panelTabs}>
          <TabList 
            selectedValue={leftTab} 
            onTabSelect={(_, data) => setLeftTab(data.value as string)}
            size="small"
          >
            <Tab value="generate">Generate</Tab>
            <Tab value="layers">Layers</Tab>
            <Tab value="project">Project Details</Tab>
          </TabList>
        </div>
        <div className={styles.panelContent}>
          {leftTab === 'generate' && renderGenerateTab()}
          {leftTab === 'layers' && renderLayersTab()}
          {leftTab === 'project' && renderProjectDetailsTab()}
        </div>
      </div>

      {/* Center Canvas */}
      <div className={styles.centerCanvas}>
        <div className={styles.canvasToolbar}>
          <div className={styles.canvasToolbarLeft}>
            <Body2 style={{ color: tokens.colorNeutralForeground2 }}>
              Project: {mockProjectData.title}
            </Body2>
          </div>
          <div className={styles.canvasToolbarRight}>
            <Button size="small" appearance="subtle" icon={<Cursor24Regular />} title="Pan" />
            <Button size="small" appearance="subtle" icon={<Add24Regular />} title="Add Device" />
            <Divider vertical />
            <Button size="small" appearance="subtle" icon={<ZoomOut24Regular />} title="Zoom Out" />
            <Button size="small" appearance="subtle" icon={<ZoomFit24Regular />} title="Zoom to Fit" />
            <Button size="small" appearance="subtle" icon={<ZoomIn24Regular />} title="Zoom In" />
            <Divider vertical />
            <Button size="small" appearance="subtle" icon={<Save24Regular />} title="Save" />
            <Button size="small" appearance="subtle" icon={<CheckmarkCircle24Regular />} title="Validate" />
            <Button size="small" appearance="subtle" icon={<Send24Regular />} title="Submit" />
          </div>
        </div>
        <div className={styles.canvasViewport}>
          {/* Render connections as SVG */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {canvasConnections.map(connection => renderCanvasConnection(connection, canvasDevices))}
          </svg>
          
          {/* Render devices */}
          {canvasDevices.map(device => renderCanvasDevice(device))}
        </div>
      </div>

      {/* Right Panel - Table/JSON/YAML */}
      <div className={styles.rightPanel}>
        <div className={styles.panelTabs}>
          <TabList 
            selectedValue={rightTab} 
            onTabSelect={(_, data) => setRightTab(data.value as string)}
            size="small"
          >
            <Tab value="table" icon={<TableSimple24Regular />}>Table</Tab>
            <Tab value="json" icon={<Code24Regular />}>JSON</Tab>
            <Tab value="yaml" icon={<Document24Regular />}>YAML</Tab>
          </TabList>
        </div>
        <div className={rightTab === 'json' || rightTab === 'yaml' ? styles.panelContentCode : styles.panelContent}>
          {rightTab === 'table' && renderTableTab()}
          {rightTab === 'json' && renderJsonTab()}
          {rightTab === 'yaml' && renderYamlTab()}
        </div>
        <div className={styles.rightPanelActions}>
          <Button appearance="outline" icon={<DocumentTable24Regular />} size="small">
            BOM
          </Button>
          <Button appearance="outline" icon={<Map24Regular />} size="small">
            Cable Map
          </Button>
          <Button appearance="outline" icon={<Checkmark24Regular />} size="small">
            AP Checklist
          </Button>
        </div>
      </div>
    </div>
  )
}
