import { useState } from 'react'
import {
  Button,
  Title3,
  Body1,
  Body2,
  Card,
  CardHeader,
  CardPreview,
  makeStyles,
  shorthands,
  tokens,
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
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerFooter,
  OverlayDrawer,
  InlineDrawer,
  Input,
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
  DocumentTable24Regular,
  Map24Regular,
  Checkmark24Regular,
  LineHorizontal120Regular,
  BotSparkle24Regular,
  CheckmarkCircle24Regular,
  Send24Regular,
  Warning24Regular,
  ErrorCircle24Regular,
  Dismiss24Regular,
} from '@fluentui/react-icons'
import { Tldraw, ShapeUtil, TLBaseShape, RecordProps, T, Rectangle2d, HTMLContainer, Geometry2d, TLResizeInfo, resizeBox, StateNode, DefaultToolbar, DefaultToolbarContent, DefaultKeyboardShortcutsDialog, DefaultKeyboardShortcutsDialogContent, TLComponents, TLUiOverrides, TldrawUiMenuItem, useIsToolSelected, useTools, TLUiAssetUrlOverrides } from 'tldraw'
import 'tldraw/tldraw.css'

// Network Device Shape Types
type NetworkDeviceShape = TLBaseShape<'network-device', {
  deviceType: string
  w: number
  h: number
}>

// Network Device Shape Utility
class NetworkDeviceShapeUtil extends ShapeUtil<NetworkDeviceShape> {
  static override type = 'network-device' as const

  static override props: RecordProps<NetworkDeviceShape> = {
    deviceType: T.string,
    w: T.number,
    h: T.number,
  }

  getDefaultProps(): NetworkDeviceShape['props'] {
    return {
      deviceType: 'router',
      w: 80,
      h: 80,
    }
  }

  override canEdit() {
    return false
  }

  override canResize() {
    return true
  }

  override isAspectRatioLocked() {
    return false
  }

  getGeometry(shape: NetworkDeviceShape): Geometry2d {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  override onResize(shape: NetworkDeviceShape, info: TLResizeInfo<NetworkDeviceShape>) {
    return resizeBox(shape, info)
  }

  component(shape: NetworkDeviceShape) {
    const { deviceType } = shape.props
    
    const getDeviceIcon = () => {
      switch (deviceType) {
        case 'router': return '🔀'
        case 'switch': return '🔗'
        case 'firewall': return '🛡️'
        case 'server': return '🖥️'
        case 'wireless-controller': return '📡'
        default: return '📦'
      }
    }

    const getDeviceColor = () => {
      switch (deviceType) {
        case 'router': return '#0078d4'
        case 'switch': return '#107c10'
        case 'firewall': return '#d13438'
        case 'server': return '#5c2d91'
        case 'wireless-controller': return '#ff8c00'
        default: return '#0078d4'
      }
    }

    return (
      <HTMLContainer
        style={{
          width: shape.props.w,
          height: shape.props.h,
          backgroundColor: getDeviceColor(),
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          border: '2px solid #fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ fontSize: '24px', marginBottom: '4px' }}>
          {getDeviceIcon()}
        </div>
        <div style={{ textAlign: 'center', lineHeight: '1.2' }}>
          {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)}
        </div>
      </HTMLContainer>
    )
  }

  indicator(shape: NetworkDeviceShape) {
    return <rect width={shape.props.w} height={shape.props.h} />
  }
}

// Network Device Tools
class RouterTool extends StateNode {
  static override id = 'router-tool'

  override onEnter() {
    this.editor.setCursor({ type: 'cross', rotation: 0 })
  }

  override onPointerDown() {
    const { currentPagePoint } = this.editor.inputs
    this.editor.createShape({
      type: 'network-device',
      x: currentPagePoint.x - 40,
      y: currentPagePoint.y - 40,
      props: {
        deviceType: 'router',
        w: 80,
        h: 80,
      },
    })
  }
}

class SwitchTool extends StateNode {
  static override id = 'switch-tool'

  override onEnter() {
    this.editor.setCursor({ type: 'cross', rotation: 0 })
  }

  override onPointerDown() {
    const { currentPagePoint } = this.editor.inputs
    this.editor.createShape({
      type: 'network-device',
      x: currentPagePoint.x - 40,
      y: currentPagePoint.y - 40,
      props: {
        deviceType: 'switch',
        w: 80,
        h: 80,
      },
    })
  }
}

class FirewallTool extends StateNode {
  static override id = 'firewall-tool'

  override onEnter() {
    this.editor.setCursor({ type: 'cross', rotation: 0 })
  }

  override onPointerDown() {
    const { currentPagePoint } = this.editor.inputs
    this.editor.createShape({
      type: 'network-device',
      x: currentPagePoint.x - 40,
      y: currentPagePoint.y - 40,
      props: {
        deviceType: 'firewall',
        w: 80,
        h: 80,
      },
    })
  }
}

class ServerTool extends StateNode {
  static override id = 'server-tool'

  override onEnter() {
    this.editor.setCursor({ type: 'cross', rotation: 0 })
  }

  override onPointerDown() {
    const { currentPagePoint } = this.editor.inputs
    this.editor.createShape({
      type: 'network-device',
      x: currentPagePoint.x - 40,
      y: currentPagePoint.y - 40,
      props: {
        deviceType: 'server',
        w: 80,
        h: 80,
      },
    })
  }
}

class WirelessTool extends StateNode {
  static override id = 'wireless-tool'

  override onEnter() {
    this.editor.setCursor({ type: 'cross', rotation: 0 })
  }

  override onPointerDown() {
    const { currentPagePoint } = this.editor.inputs
    this.editor.createShape({
      type: 'network-device',
      x: currentPagePoint.x - 40,
      y: currentPagePoint.y - 40,
      props: {
        deviceType: 'wireless-controller',
        w: 80,
        h: 80,
      },
    })
  }
}

// UI Overrides for adding tools to toolbar
const uiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Remove ALL unwanted tools - being very thorough
    delete tools.geo
    delete tools.draw
    delete tools.note
    delete tools.frame
    delete tools.highlight
    delete tools.asset
    delete tools.embed
    delete tools.eraser
    delete tools.laser
    delete tools.line
    delete tools.fill
    delete tools.opacity
    delete tools.stroke
    delete tools.dash
    delete tools.size
    
    // Add network device tools with custom icons
    tools['router-tool'] = {
      id: 'router-tool',
      icon: 'router-icon',
      label: 'Router',
      kbd: 'r',
      onSelect: () => {
        editor.setCurrentTool('router-tool')
      },
    }
    tools['switch-tool'] = {
      id: 'switch-tool',
      icon: 'switch-icon',
      label: 'Switch',
      kbd: 'w',
      onSelect: () => {
        editor.setCurrentTool('switch-tool')
      },
    }
    tools['firewall-tool'] = {
      id: 'firewall-tool',
      icon: 'firewall-icon',
      label: 'Firewall',
      kbd: 'f',
      onSelect: () => {
        editor.setCurrentTool('firewall-tool')
      },
    }
    tools['server-tool'] = {
      id: 'server-tool',
      icon: 'server-icon',
      label: 'Server',
      kbd: 'v',
      onSelect: () => {
        editor.setCurrentTool('server-tool')
      },
    }
    tools['wireless-tool'] = {
      id: 'wireless-tool',
      icon: 'wireless-icon',
      label: 'Wireless',
      kbd: 'q',
      onSelect: () => {
        editor.setCurrentTool('wireless-tool')
      },
    }
    return tools
  },
  actions(_, actions) {
    // Remove ALL style-related actions
    delete actions['toggle-style-panel']
    delete actions['toggle-styles']
    delete actions['open-style-panel']
    delete actions['style-panel']
    delete actions['styles']
    return actions
  },
}

// Custom Asset URLs for Azure-style network device icons
const customAssetUrls: TLUiAssetUrlOverrides = {
  icons: {
    'router-icon': 'data:image/svg+xml;base64,' + btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="routerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0078D4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#106EBE;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="3" y="9" width="18" height="6" rx="1.5" fill="url(#routerGrad)" stroke="#005A9E" stroke-width="0.5"/>
        <circle cx="6" cy="12" r="1" fill="#FFFFFF"/>
        <circle cx="9" cy="12" r="1" fill="#FFFFFF"/>
        <circle cx="12" cy="12" r="1" fill="#FFFFFF"/>
        <circle cx="15" cy="12" r="1" fill="#FFFFFF"/>
        <circle cx="18" cy="12" r="1" fill="#FFFFFF"/>
        <rect x="19.5" y="10.5" width="1.5" height="3" fill="#FFFFFF"/>
        <path d="M10.5 6 L12 4.5 L13.5 6" stroke="#0078D4" stroke-width="1.2" fill="none"/>
        <path d="M10.5 18 L12 19.5 L13.5 18" stroke="#0078D4" stroke-width="1.2" fill="none"/>
      </svg>
    `),
    'switch-icon': 'data:image/svg+xml;base64,' + btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="switchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#00BCF2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0099BC;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="7.5" width="21" height="9" rx="1.5" fill="url(#switchGrad)" stroke="#0078D4" stroke-width="0.5"/>
        <rect x="3" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="5.25" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="7.5" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="9.75" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="12" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="14.25" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="16.5" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <rect x="18.75" y="9" width="1.5" height="6" fill="#FFFFFF" rx="0.3"/>
        <circle cx="12" cy="4.5" r="1.5" fill="#00BCF2"/>
        <path d="M9 4.5 L15 4.5" stroke="#00BCF2" stroke-width="1.2"/>
        <path d="M12 6 L12 7.5" stroke="#00BCF2" stroke-width="1.2"/>
      </svg>
    `),
    'firewall-icon': 'data:image/svg+xml;base64,' + btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="firewallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FF8C00;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#D83B01;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M12 3 L18 6 L18 13.5 C18 16.5 15 19.5 12 21 C9 19.5 6 16.5 6 13.5 L6 6 Z" fill="url(#firewallGrad)" stroke="#C0392B" stroke-width="0.5"/>
        <path d="M12 6 L15 7.5 L15 12 C15 13.875 13.5 15.75 12 16.5 C10.5 15.75 9 13.875 9 12 L9 7.5 Z" fill="#FFFFFF"/>
        <circle cx="12" cy="10.5" r="1.5" fill="#D83B01"/>
        <rect x="11.25" y="12" width="1.5" height="2.25" fill="#D83B01"/>
      </svg>
    `),
    'server-icon': 'data:image/svg+xml;base64,' + btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#68217A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#5C2E91;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="4.5" y="4.5" width="15" height="4.5" rx="0.75" fill="url(#serverGrad)" stroke="#4A1A5C" stroke-width="0.5"/>
        <rect x="4.5" y="9.75" width="15" height="4.5" rx="0.75" fill="url(#serverGrad)" stroke="#4A1A5C" stroke-width="0.5"/>
        <rect x="4.5" y="15" width="15" height="4.5" rx="0.75" fill="url(#serverGrad)" stroke="#4A1A5C" stroke-width="0.5"/>
        <circle cx="6.75" cy="6.75" r="0.75" fill="#FFFFFF"/>
        <circle cx="9" cy="6.75" r="0.75" fill="#FFFFFF"/>
        <circle cx="6.75" cy="12" r="0.75" fill="#FFFFFF"/>
        <circle cx="9" cy="12" r="0.75" fill="#FFFFFF"/>
        <circle cx="6.75" cy="17.25" r="0.75" fill="#FFFFFF"/>
        <circle cx="9" cy="17.25" r="0.75" fill="#FFFFFF"/>
        <rect x="12" y="6" width="6" height="1.5" rx="0.375" fill="#FFFFFF"/>
        <rect x="12" y="11.25" width="6" height="1.5" rx="0.375" fill="#FFFFFF"/>
        <rect x="12" y="16.5" width="6" height="1.5" rx="0.375" fill="#FFFFFF"/>
      </svg>
    `),
    'wireless-icon': 'data:image/svg+xml;base64,' + btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wirelessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#00BCF2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0078D4;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="9" y="15" width="6" height="4.5" rx="0.75" fill="url(#wirelessGrad)" stroke="#005A9E" stroke-width="0.5"/>
        <circle cx="10.5" cy="17.25" r="0.6" fill="#FFFFFF"/>
        <circle cx="13.5" cy="17.25" r="0.6" fill="#FFFFFF"/>
        <rect x="11.25" y="13.5" width="1.5" height="1.5" fill="#00BCF2"/>
        <path d="M6 9 C6 6 8.4 3 12 3 C15.6 3 18 6 18 9" stroke="#0078D4" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M8.25 11.25 C8.25 9.15 9.9 7.5 12 7.5 C14.1 7.5 15.75 9.15 15.75 11.25" stroke="#00BCF2" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M10.125 13.125 C10.125 12.075 10.95 11.25 12 11.25 C13.05 11.25 13.875 12.075 13.875 13.125" stroke="#40E0D0" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      </svg>
    `),
  },
}

// Custom Components for toolbar
const components: TLComponents = {
  Toolbar: (props) => {
    const tools = useTools()
    const isRouterSelected = useIsToolSelected(tools['router-tool'])
    const isSwitchSelected = useIsToolSelected(tools['switch-tool'])
    const isFirewallSelected = useIsToolSelected(tools['firewall-tool'])
    const isServerSelected = useIsToolSelected(tools['server-tool'])
    const isWirelessSelected = useIsToolSelected(tools['wireless-tool'])
    
    return (
      <DefaultToolbar {...props}>
        <TldrawUiMenuItem {...tools['router-tool']} isSelected={isRouterSelected} />
        <TldrawUiMenuItem {...tools['switch-tool']} isSelected={isSwitchSelected} />
        <TldrawUiMenuItem {...tools['firewall-tool']} isSelected={isFirewallSelected} />
        <TldrawUiMenuItem {...tools['server-tool']} isSelected={isServerSelected} />
        <TldrawUiMenuItem {...tools['wireless-tool']} isSelected={isWirelessSelected} />
        <DefaultToolbarContent />
      </DefaultToolbar>
    )
  },
  StylePanel: () => null,
  ActionsMenu: () => null,
  KeyboardShortcutsDialog: (props) => {
    const tools = useTools()
    return (
      <DefaultKeyboardShortcutsDialog {...props}>
        <DefaultKeyboardShortcutsDialogContent />
        <TldrawUiMenuItem {...tools['router-tool']} />
        <TldrawUiMenuItem {...tools['switch-tool']} />
        <TldrawUiMenuItem {...tools['firewall-tool']} />
        <TldrawUiMenuItem {...tools['server-tool']} />
        <TldrawUiMenuItem {...tools['wireless-tool']} />
      </DefaultKeyboardShortcutsDialog>
    )
  },
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: 'calc(100vh - 125px)',
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    position: 'relative',
  },
  leftDrawer: {
    width: '20%',
    minWidth: '280px',
    maxWidth: '400px',
  },
  rightDrawer: {
    width: '20%',
    minWidth: '280px',
    maxWidth: '400px',
  },
  centerCanvas: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: 0, // Allow canvas to shrink
    width: '60%',
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

// Mock validation rules
interface ValidationRule {
  id: string
  category: string
  rule: string
  status: 'passed' | 'failed' | 'warning'
  message: string
  details?: string
}

// BOM interface
interface BomItem {
  id: string
  modelNumber: string
  itemDescription: string
  qty: number
  unitPrice: number
  totalCost: number
  comments: string
}

// Cable Map interface
interface CableMapItem {
  id: string
  connectionNotes: string
  sourceDevice: string
  sourcePort: string
  sourcePortSpeed: string
  sourceBreakout: string
  sourceLocation: string
  destinationDevice: string
  destinationPort: string
  destinationPortSpeed: string
  destinationLocation: string
  duplicateRoute: string
  media: string
  options: string
}

const mockValidationRules: ValidationRule[] = [
  {
    id: 'rule1',
    category: 'Connectivity',
    rule: 'All devices must be connected',
    status: 'passed',
    message: 'All network devices are properly connected',
    details: '3 devices, 2 connections verified'
  },
  {
    id: 'rule2',
    category: 'Redundancy',
    rule: 'Core switches must have redundant connections',
    status: 'failed',
    message: 'Core switch lacks redundant uplinks',
    details: 'Core Switch 01 only has 1 uplink connection'
  },
  {
    id: 'rule3',
    category: 'Security',
    rule: 'Firewall must be positioned correctly',
    status: 'passed',
    message: 'Firewall is properly positioned in network path',
    details: 'Firewall 01 is between router and internal network'
  },
  {
    id: 'rule4',
    category: 'Performance',
    rule: 'Link speeds must be consistent',
    status: 'warning',
    message: 'Bandwidth bottleneck detected',
    details: 'Router-Firewall link (1Gbps) is slower than Switch-Router link (10Gbps)'
  },
  {
    id: 'rule5',
    category: 'Standards',
    rule: 'Device naming convention compliance',
    status: 'passed',
    message: 'All devices follow naming standards',
    details: 'Device names match corporate naming convention'
  },
  {
    id: 'rule6',
    category: 'Capacity',
    rule: 'Port utilization within limits',
    status: 'passed',
    message: 'Port usage is within acceptable limits',
    details: 'All devices have available ports for future expansion'
  },
  {
    id: 'rule7',
    category: 'Topology',
    rule: 'No single points of failure',
    status: 'failed',
    message: 'Single points of failure detected',
    details: 'Router 01 is a single point of failure for network connectivity'
  }
]

export default function DesignEditor() {
  const styles = useStyles()
  const [leftTab, setLeftTab] = useState('generate')
  const [rightTab, setRightTab] = useState('table')
  const [selectedHierarchy, setSelectedHierarchy] = useState<HierarchyNode | null>(null)
  // Generate tab state
  const [designTarget, setDesignTarget] = useState<string>('wan')
  const [designPrompt, setDesignPrompt] = useState('')
  const [isValidationPanelOpen, setIsValidationPanelOpen] = useState(false)
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(true)
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(true)
  // BOM drawer state
  const [isBomDrawerOpen, setIsBomDrawerOpen] = useState(false)
  const [bomValidationErrors, setBomValidationErrors] = useState<string[]>([])
  // Cable Map drawer state
  const [isCableMapDrawerOpen, setIsCableMapDrawerOpen] = useState(false)
  const [cableMapValidationErrors, setCableMapValidationErrors] = useState<string[]>([])
  const [bomData, setBomData] = useState<BomItem[]>([
    { 
      id: '1', 
      modelNumber: 'CAT3750-12T-S', 
      itemDescription: 'Catalyst 3750 12-Port Switch', 
      qty: 2, 
      unitPrice: 1250.00, 
      totalCost: 2500.00, 
      comments: 'Core networking equipment' 
    },
    { 
      id: '2', 
      modelNumber: 'ASR1001-X', 
      itemDescription: 'ASR 1001-X Router', 
      qty: 1, 
      unitPrice: 8500.00, 
      totalCost: 8500.00, 
      comments: 'Edge router for WAN connectivity' 
    },
    { 
      id: '3', 
      modelNumber: 'ASA5516-K9', 
      itemDescription: 'ASA 5516-X Firewall', 
      qty: 1, 
      unitPrice: 3200.00, 
      totalCost: 3200.00, 
      comments: 'Security appliance' 
    },
    { 
      id: '4', 
      modelNumber: 'CAB-AC-2500W-US', 
      itemDescription: 'Power Cable 2500W US', 
      qty: 4, 
      unitPrice: 75.00, 
      totalCost: 300.00, 
      comments: 'Power cables for equipment' 
    },
    { 
      id: '5', 
      modelNumber: 'RACK-42U-STD', 
      itemDescription: 'Standard 42U Server Rack', 
      qty: 1, 
      unitPrice: 850.00, 
      totalCost: 850.00, 
      comments: 'Equipment mounting rack' 
    }
  ])

  // Cable Map data
  const [cableMapData, setCableMapData] = useState<CableMapItem[]>([
    {
      id: '1',
      connectionNotes: 'wired router uplink connected to Switch cusbgudca301 > cusbgudca301',
      sourceDevice: 'cusbgudca301',
      sourcePort: 'Te0/0/4',
      sourcePortSpeed: '10G',
      sourceBreakout: 'No',
      sourceLocation: '#N/A',
      destinationDevice: 'cusbgudca301',
      destinationPort: 'Te1/1/1',
      destinationPortSpeed: '10G',
      destinationLocation: '#N/A',
      duplicateRoute: 'Connection Ok',
      media: 'SFP+',
      options: 'SFP+'
    },
    {
      id: '2',
      connectionNotes: 'wired router uplink connected to Switch cusbgudca301 > cusbgudca301',
      sourceDevice: 'cusbgudca301',
      sourcePort: 'Te0/0/5',
      sourcePortSpeed: '10G',
      sourceBreakout: 'No',
      sourceLocation: '#N/A',
      destinationDevice: 'cusbgudca301',
      destinationPort: 'Te1/1/2',
      destinationPortSpeed: '10G',
      destinationLocation: '#N/A',
      duplicateRoute: 'Connection Ok',
      media: 'SFP+',
      options: 'SFP+'
    },
    {
      id: '3',
      connectionNotes: 'wired router uplink connected to Switch cusbgudca301 > cusbgudca303',
      sourceDevice: 'cusbgudca301',
      sourcePort: 'Te0/0/6',
      sourcePortSpeed: '10G',
      sourceBreakout: 'No',
      sourceLocation: '#N/A',
      destinationDevice: 'cusbgudca303',
      destinationPort: 'Te1/1/1',
      destinationPortSpeed: '10G',
      destinationLocation: '#N/A',
      duplicateRoute: 'Connection Ok',
      media: 'SFP+',
      options: 'SFP+'
    },
    {
      id: '4',
      connectionNotes: 'wired router uplink connected to Switch cusbgudca301 > cusbgudca303',
      sourceDevice: 'cusbgudca301',
      sourcePort: 'Te0/0/7',
      sourcePortSpeed: '10G',
      sourceBreakout: 'No',
      sourceLocation: '#N/A',
      destinationDevice: 'cusbgudca303',
      destinationPort: 'Te1/1/2',
      destinationPortSpeed: '10G',
      destinationLocation: '#N/A',
      duplicateRoute: 'Connection Ok',
      media: 'SFP+',
      options: 'SFP+'
    },
    {
      id: '5',
      connectionNotes: 'wired router uplink connected to Router cusbgudca301 > cusbgudca302',
      sourceDevice: 'cusbgudca302',
      sourcePort: 'Te0/0/2',
      sourcePortSpeed: '10G',
      sourceBreakout: 'No',
      sourceLocation: '#N/A',
      destinationDevice: 'cusbgudca302',
      destinationPort: 'Te0/0/2',
      destinationPortSpeed: '10G',
      destinationLocation: '#N/A',
      duplicateRoute: 'Connection Ok',
      media: 'SFP+',
      options: 'SFP+'
    }
  ])

  const [, setEditor] = useState<any>(null)

  // Custom shape utils and tools
  const customShapeUtils = [NetworkDeviceShapeUtil]
  const customTools = [RouterTool, SwitchTool, FirewallTool, ServerTool, WirelessTool]

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

  const getValidationIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckmarkCircle24Regular style={{ color: '#107c10' }} />
      case 'failed': return <ErrorCircle24Regular style={{ color: '#d13438' }} />
      case 'warning': return <Warning24Regular style={{ color: '#ff8c00' }} />
      default: return <Circle16Regular />
    }
  }

  const handleValidateClick = () => {
    setIsValidationPanelOpen(true)
  }

  const renderValidationPanel = () => {
    if (!isValidationPanelOpen) return null

    const passedRules = mockValidationRules.filter(rule => rule.status === 'passed').length
    const failedRules = mockValidationRules.filter(rule => rule.status === 'failed').length
    const warningRules = mockValidationRules.filter(rule => rule.status === 'warning').length
    const totalRules = mockValidationRules.length

    return (
      <OverlayDrawer
        open={isValidationPanelOpen}
        onOpenChange={(_, { open }) => setIsValidationPanelOpen(open)}
        position="end"
        size="medium"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsValidationPanelOpen(false)}
              />
            }
          >
            Design Validation
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Validation Summary Card */}
            <Card>
              <CardHeader>
                <div>
                  <Title3>Validation Summary</Title3>
                  <Body2>Network design rule compliance</Body2>
                </div>
              </CardHeader>
              <CardPreview style={{ padding: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Body1>Total Rules: {totalRules}</Body1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckmarkCircle24Regular style={{ color: '#107c10' }} />
                    <Body2>Passed: {passedRules}</Body2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ErrorCircle24Regular style={{ color: '#d13438' }} />
                    <Body2>Failed: {failedRules}</Body2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Warning24Regular style={{ color: '#ff8c00' }} />
                    <Body2>Warnings: {warningRules}</Body2>
                  </div>
                </div>
              </CardPreview>
            </Card>

            {/* Individual Validation Rules */}
            {mockValidationRules.map((rule) => (
              <Card key={rule.id}>
                <CardHeader>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {getValidationIcon(rule.status)}
                    <div>
                      <Title3 style={{ fontSize: '14px' }}>{rule.rule}</Title3>
                      <Badge appearance="outline" size="small">{rule.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardPreview style={{ padding: '16px' }}>
                  <Body2 style={{ marginBottom: '8px' }}>{rule.message}</Body2>
                  {rule.details && (
                    <Body2 style={{ fontSize: '12px', color: tokens.colorNeutralForeground3 }}>
                      {rule.details}
                    </Body2>
                  )}
                </CardPreview>
              </Card>
            ))}
          </div>
        </DrawerBody>
      </OverlayDrawer>
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
          <div>
            <Title3>Project Information</Title3>
            <Body2>Network design project details</Body2>
          </div>
        </CardHeader>
        <CardPreview style={{ padding: '16px' }}>
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
        </CardPreview>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <Title3>Description</Title3>
            <Body2>Project scope and objectives</Body2>
          </div>
        </CardHeader>
        <CardPreview style={{ padding: '16px' }}>
          <Body1>{mockProjectData.description}</Body1>
        </CardPreview>
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
      {/* Left Drawer - Generate, Layers & Project Details */}
      <InlineDrawer
        open={isLeftDrawerOpen}
        position="start"
        size="small"
        style={{ width: '20vw', minWidth: '280px', maxWidth: '400px' }}
      >
        <DrawerHeader>
          <DrawerHeaderTitle>Design Tools</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <TabList 
              selectedValue={leftTab} 
              onTabSelect={(_, data) => setLeftTab(data.value as string)}
              size="small"
              style={{ marginBottom: '16px' }}
            >
              <Tab value="generate">Generate</Tab>
              <Tab value="layers">Layers</Tab>
              <Tab value="project">Project Details</Tab>
            </TabList>
            <div style={{ flex: 1, overflow: 'auto' }}>
              {leftTab === 'generate' && renderGenerateTab()}
              {leftTab === 'layers' && renderLayersTab()}
              {leftTab === 'project' && renderProjectDetailsTab()}
            </div>
          </div>
        </DrawerBody>
      </InlineDrawer>

      {/* Center Canvas */}
      <div className={styles.centerCanvas}>
        <div className={styles.canvasToolbar}>
          <div className={styles.canvasToolbarLeft}>
            <Button 
              size="small" 
              appearance="subtle" 
              onClick={() => setIsLeftDrawerOpen(!isLeftDrawerOpen)}
              style={{ marginRight: '8px' }}
            >
              ☰
            </Button>
            <Body2 style={{ color: tokens.colorNeutralForeground2 }}>
              Project: {mockProjectData.title}
            </Body2>
          </div>
          <div className={styles.canvasToolbarRight}>
            <Button size="small" appearance="subtle" icon={<Save24Regular />} title="Save" />
            <Button 
              size="small" 
              appearance="subtle" 
              icon={<CheckmarkCircle24Regular />} 
              title="Validate" 
              onClick={handleValidateClick}
            />
            <Button size="small" appearance="subtle" icon={<Send24Regular />} title="Submit" />
            <Button 
              size="small" 
              appearance="subtle" 
              onClick={() => setIsRightDrawerOpen(!isRightDrawerOpen)}
              style={{ marginLeft: '8px' }}
            >
              ☰
            </Button>
          </div>
        </div>
        <div className={styles.canvasViewport}>
          {renderValidationPanel()}
          <Tldraw 
            shapeUtils={customShapeUtils}
            tools={customTools}
            overrides={uiOverrides}
            components={components}
            assetUrls={customAssetUrls}
            onMount={(editor) => {
              console.log('Tldraw mounted, editor:', editor)
              setEditor(editor)
              // Center the view
              editor.zoomToFit()
              
              // Create a test network device shape
              editor.createShape({ 
                type: 'network-device', 
                x: 100, 
                y: 100,
                props: {
                  deviceType: 'router',
                  w: 80,
                  h: 80,
                }
              })
            }}
          />
        </div>
      </div>

      {/* Right Drawer - Table/JSON/YAML */}
      <InlineDrawer
        open={isRightDrawerOpen}
        position="end"
        size="small"
        style={{ width: '20vw', minWidth: '280px', maxWidth: '400px' }}
      >
        <DrawerHeader>
          <DrawerHeaderTitle>Design Data</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <TabList 
              selectedValue={rightTab} 
              onTabSelect={(_, data) => setRightTab(data.value as string)}
              size="small"
              style={{ marginBottom: '16px' }}
            >
              <Tab value="table" icon={<TableSimple24Regular />}>Table</Tab>
              <Tab value="json" icon={<Code24Regular />}>JSON</Tab>
              <Tab value="yaml" icon={<Document24Regular />}>YAML</Tab>
            </TabList>
            <div style={{ flex: 1, overflow: 'auto' }}>
              {rightTab === 'table' && renderTableTab()}
              {rightTab === 'json' && renderJsonTab()}
              {rightTab === 'yaml' && renderYamlTab()}
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
            <Button 
              appearance="outline" 
              icon={<DocumentTable24Regular />} 
              size="small"
              onClick={() => setIsBomDrawerOpen(true)}
            >
              BOM
            </Button>
            <Button 
              appearance="outline" 
              icon={<Map24Regular />} 
              size="small"
              onClick={() => setIsCableMapDrawerOpen(true)}
            >
              Cable Map
            </Button>
            <Button appearance="outline" icon={<Checkmark24Regular />} size="small">
              AP Checklist
            </Button>
          </div>
        </DrawerFooter>
      </InlineDrawer>

      {/* BOM Drawer */}
      <OverlayDrawer
        open={isBomDrawerOpen}
        onOpenChange={(_, { open }) => setIsBomDrawerOpen(open)}
        position="end"
        size="large"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsBomDrawerOpen(false)}
              />
            }
          >
            Bill of Materials
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflow: 'auto' }}>
              <Table size="small">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px'
                    }}>
                      Model Number
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px'
                    }}>
                      Item Description
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px'
                    }}>
                      Qty
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px'
                    }}>
                      Unit Price
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px'
                    }}>
                      Total Cost
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px'
                    }}>
                      Comments
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bomData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.modelNumber}
                          onChange={(_, data) => {
                            setBomData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, modelNumber: data.value } : row
                            ))
                          }}
                          style={{ 
                            border: bomValidationErrors.includes(`model-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '100%',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.itemDescription}
                          onChange={(_, data) => {
                            setBomData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, itemDescription: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          type="number"
                          value={item.qty.toString()}
                          onChange={(_, data) => {
                            const qty = parseInt(data.value) || 0
                            setBomData(prev => prev.map(row => 
                              row.id === item.id ? { 
                                ...row, 
                                qty, 
                                totalCost: qty * row.unitPrice 
                              } : row
                            ))
                          }}
                          style={{ 
                            border: bomValidationErrors.includes(`qty-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '80px',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          type="number"
                          value={item.unitPrice.toFixed(2)}
                          onChange={(_, data) => {
                            const unitPrice = parseFloat(data.value) || 0
                            setBomData(prev => prev.map(row => 
                              row.id === item.id ? { 
                                ...row, 
                                unitPrice, 
                                totalCost: row.qty * unitPrice 
                              } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '120px', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <div style={{ padding: '8px', fontWeight: '600', color: tokens.colorBrandForeground1, textAlign: 'left' }}>
                          ${item.totalCost.toFixed(2)}
                        </div>
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.comments}
                          onChange={(_, data) => {
                            setBomData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, comments: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div style={{ 
              marginTop: '16px', 
              padding: '16px', 
              borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
              backgroundColor: tokens.colorNeutralBackground2,
              borderRadius: tokens.borderRadiusMedium
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Body1 style={{ fontWeight: '600' }}>Order Total:</Body1>
                <Title3 style={{ color: tokens.colorBrandForeground1 }}>
                  ${bomData.reduce((sum, item) => sum + item.totalCost, 0).toFixed(2)}
                </Title3>
              </div>
            </div>
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button 
            appearance="secondary"
            onClick={() => {
              // Validate BOM data - highlight random cells with errors
              const errors: string[] = []
              
              // Randomly select some Model Number fields to mark as invalid
              const modelNumberErrors = ['1', '3', '5'] // Random item IDs
              modelNumberErrors.forEach(id => {
                if (bomData.find(item => item.id === id)) {
                  errors.push(`model-${id}`)
                }
              })
              
              // Randomly select some Qty fields to mark as invalid
              const qtyErrors = ['2', '4'] // Random item IDs
              qtyErrors.forEach(id => {
                if (bomData.find(item => item.id === id)) {
                  errors.push(`qty-${id}`)
                }
              })
              
              setBomValidationErrors(errors)
              console.log('BOM Validation completed. Found errors in:', errors)
            }}
          >
            Validate
          </Button>
          <Button 
            appearance="primary"
            disabled={bomValidationErrors.length > 0}
            onClick={() => {
              // Save BOM data and clear validation errors
              setBomValidationErrors([])
              console.log('Saving BOM data...', bomData)
            }}
          >
            Save
          </Button>
        </DrawerFooter>
      </OverlayDrawer>

      {/* Cable Map Drawer */}
      <OverlayDrawer
        open={isCableMapDrawerOpen}
        onOpenChange={(_, { open }) => setIsCableMapDrawerOpen(open)}
        position="end"
        size="large"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsCableMapDrawerOpen(false)}
              />
            }
          >
            Ethernet Links for IP Network Devices
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflow: 'auto' }}>
              <Table size="small">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '200px'
                    }}>
                      Connection Notes
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '120px'
                    }}>
                      Source Device
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '100px'
                    }}>
                      Source Port
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '80px'
                    }}>
                      Port Speed
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '100px'
                    }}>
                      Breakout/Populated
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '120px'
                    }}>
                      Source Device Location
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '120px'
                    }}>
                      Destination Device
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '100px'
                    }}>
                      Destination Port
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '80px'
                    }}>
                      Destination Port Speed
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '120px'
                    }}>
                      Destination Device Location
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '100px'
                    }}>
                      Duplicate Route
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '80px'
                    }}>
                      Media
                    </TableHeaderCell>
                    <TableHeaderCell style={{ 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      backgroundColor: tokens.colorNeutralBackground2,
                      borderBottom: `2px solid ${tokens.colorNeutralStroke2}`,
                      padding: '12px 8px',
                      minWidth: '80px'
                    }}>
                      Options
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cableMapData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.connectionNotes}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, connectionNotes: data.value } : row
                            ))
                          }}
                          style={{ 
                            border: cableMapValidationErrors.includes(`notes-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '100%',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.sourceDevice}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, sourceDevice: data.value } : row
                            ))
                          }}
                          style={{ 
                            border: cableMapValidationErrors.includes(`source-device-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '100%',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.sourcePort}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, sourcePort: data.value } : row
                            ))
                          }}
                          style={{ 
                            border: cableMapValidationErrors.includes(`source-port-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '100%',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.sourcePortSpeed}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, sourcePortSpeed: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.sourceBreakout}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, sourceBreakout: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.sourceLocation}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, sourceLocation: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.destinationDevice}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, destinationDevice: data.value } : row
                            ))
                          }}
                          style={{ 
                            border: cableMapValidationErrors.includes(`dest-device-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '100%',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.destinationPort}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, destinationPort: data.value } : row
                            ))
                          }}
                          style={{ 
                            border: cableMapValidationErrors.includes(`dest-port-${item.id}`) ? '2px solid #d13438' : 'none', 
                            background: 'transparent', 
                            width: '100%',
                            textAlign: 'left'
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.destinationPortSpeed}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, destinationPortSpeed: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.destinationLocation}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, destinationLocation: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <div style={{ padding: '8px', textAlign: 'left', color: '#107c10', fontWeight: '500' }}>
                          {item.duplicateRoute}
                        </div>
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.media}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, media: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                      <TableCell style={{ padding: '8px', textAlign: 'left' }}>
                        <Input
                          value={item.options}
                          onChange={(_, data) => {
                            setCableMapData(prev => prev.map(row => 
                              row.id === item.id ? { ...row, options: data.value } : row
                            ))
                          }}
                          style={{ border: 'none', background: 'transparent', width: '100%', textAlign: 'left' }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button 
            appearance="secondary"
            onClick={() => {
              // Validate Cable Map data - highlight random cells with errors
              const errors: string[] = []
              
              // Randomly select some fields to mark as invalid
              const sourceDeviceErrors = ['1', '3'] // Random item IDs
              sourceDeviceErrors.forEach(id => {
                if (cableMapData.find(item => item.id === id)) {
                  errors.push(`source-device-${id}`)
                }
              })
              
              // Randomly select some port fields to mark as invalid
              const portErrors = ['2', '4'] // Random item IDs
              portErrors.forEach(id => {
                if (cableMapData.find(item => item.id === id)) {
                  errors.push(`source-port-${id}`)
                  errors.push(`dest-port-${id}`)
                }
              })
              
              setCableMapValidationErrors(errors)
              console.log('Cable Map Validation completed. Found errors in:', errors)
            }}
          >
            Validate
          </Button>
          <Button 
            appearance="primary"
            disabled={cableMapValidationErrors.length > 0}
            onClick={() => {
              // Save Cable Map data and clear validation errors
              setCableMapValidationErrors([])
              console.log('Saving Cable Map data...', cableMapData)
            }}
          >
            Save
          </Button>
        </DrawerFooter>
      </OverlayDrawer>
    </div>
  )
}
