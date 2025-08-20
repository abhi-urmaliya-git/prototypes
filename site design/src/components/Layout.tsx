import { ReactNode, useState } from 'react'
import {
  Title3,
  makeStyles,
  shorthands,
  tokens,
  Button,
} from '@fluentui/react-components'
import {
  Home24Regular,
  DesignIdeas24Regular,
  DocumentTable24Regular,
  ChevronDown16Regular,
  ChevronRight16Regular,
  Settings24Regular,
  Database24Regular,
} from '@fluentui/react-icons'
import { useNavigate, useLocation } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: tokens.colorNeutralBackground1,
    overflow: 'hidden',
  },
  topBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '48px',
    backgroundColor: '#0078d4',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('0', '16px'),
    zIndex: 1000,
    boxShadow: tokens.shadow4,
  },
  hamburger: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    ...shorthands.padding('8px'),
    marginRight: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  },
  appTitle: {
    fontSize: '16px',
    fontWeight: '600',
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '600px',
    ...shorthands.margin('0', '16px'),
  },
  searchInput: {
    width: '400px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: 'white',
    ...shorthands.padding('8px', '12px'),
    borderRadius: '4px',
    '&::placeholder': {
      color: 'rgba(255,255,255,0.8)',
    },
  },
  sidebar: {
    width: '280px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    marginTop: '48px',
    height: 'calc(100vh - 48px)',
    ...shorthands.overflow('auto'),
    transition: 'width 0.3s ease',
  },
  sidebarCollapsed: {
    width: '48px',
  },
  sidebarContent: {
    ...shorthands.padding('24px', '16px'),
  },
  main: {
    flex: 1,
    marginTop: '48px',
    height: 'calc(100vh - 48px)',
    width: '100%',
    ...shorthands.overflow('auto'),
    transition: 'margin-left 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  mainCollapsed: {
    marginLeft: '-152px', // Adjust for collapsed sidebar
  },
  content: {
    flex: 1,
    ...shorthands.padding('0'),
    height: '100%',
    ...shorthands.overflow('auto'),
  },
  pageHeader: {
    ...shorthands.padding('20px', '24px'),
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  },
  navGroup: {
    marginBottom: '16px',
  },
  navGroupHeader: {
    ...shorthands.padding('8px', '12px'),
    fontSize: '12px',
    fontWeight: '600',
    color: tokens.colorNeutralForeground2,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
    borderRadius: '4px',
  },
  navGroupHeaderCollapsed: {
    justifyContent: 'center',
    ...shorthands.padding('8px'),
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.padding('12px', '16px'),
    cursor: 'pointer',
    borderRadius: '6px',
    color: tokens.colorNeutralForeground1,
    textDecoration: 'none',
    fontSize: '14px',
    marginBottom: '4px',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  navItemCollapsed: {
    justifyContent: 'center',
    ...shorthands.padding('8px'),
  },
  navItemActive: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontWeight: '600',
  },
  navIcon: {
    marginRight: '8px',
    fontSize: '16px',
  },
  navIconCollapsed: {
    marginRight: '0',
  },
  subNavItem: {
    ...shorthands.padding('6px', '12px', '6px', '32px'),
    fontSize: '14px',
  },
  subNavItemCollapsed: {
    ...shorthands.padding('6px', '8px'),
  },
  navText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  navTextHidden: {
    display: 'none',
  },
})

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isNetworkDesignExpanded, setIsNetworkDesignExpanded] = useState(true)

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const isActiveRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleNetworkDesignGroup = () => {
    if (!isCollapsed) {
      setIsNetworkDesignExpanded(!isNetworkDesignExpanded)
    }
  }

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <button className={styles.hamburger} onClick={toggleSidebar}>
            ☰
          </button>
          <div className={styles.appTitle}>
            AutoNet Portal
          </div>
        </div>
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search app"
            className={styles.searchInput}
          />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isCollapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.sidebarContent}>
          {/* Network Design Group */}
          <div className={styles.navGroup}>
            <div 
              className={`${styles.navGroupHeader} ${isCollapsed ? styles.navGroupHeaderCollapsed : ''}`}
              onClick={toggleNetworkDesignGroup}
            >
              {!isCollapsed && (
                <>
                  {isNetworkDesignExpanded ? (
                    <ChevronDown16Regular style={{ marginRight: '4px' }} />
                  ) : (
                    <ChevronRight16Regular style={{ marginRight: '4px' }} />
                  )}
                  <span className={isCollapsed ? styles.navTextHidden : styles.navText}>
                    Network Design
                  </span>
                </>
              )}
              {isCollapsed && <DesignIdeas24Regular />}
            </div>
            
            {(isNetworkDesignExpanded || isCollapsed) && (
              <>
                <div 
                  className={`${styles.navItem} ${styles.subNavItem} ${isCollapsed ? styles.subNavItemCollapsed : ''} ${isActiveRoute('/intake') ? styles.navItemActive : ''}`}
                  onClick={() => handleNavigation('/intake')}
                  title={isCollapsed ? 'Intake' : ''}
                >
                  <Home24Regular className={`${styles.navIcon} ${isCollapsed ? styles.navIconCollapsed : ''}`} />
                  <span className={isCollapsed ? styles.navTextHidden : styles.navText}>
                    Intake
                  </span>
                </div>

                <div 
                  className={`${styles.navItem} ${styles.subNavItem} ${isCollapsed ? styles.subNavItemCollapsed : ''} ${isActiveRoute('/design') ? styles.navItemActive : ''}`}
                  onClick={() => handleNavigation('/design/demo')}
                  title={isCollapsed ? 'Design Editor' : ''}
                >
                  <DesignIdeas24Regular className={`${styles.navIcon} ${isCollapsed ? styles.navIconCollapsed : ''}`} />
                  <span className={isCollapsed ? styles.navTextHidden : styles.navText}>
                    Design Editor
                  </span>
                </div>

                <div 
                  className={`${styles.navItem} ${styles.subNavItem} ${isCollapsed ? styles.subNavItemCollapsed : ''} ${isActiveRoute('/design-store') ? styles.navItemActive : ''}`}
                  onClick={() => handleNavigation('/design-store')}
                  title={isCollapsed ? 'Design Store' : ''}
                >
                  <Database24Regular className={`${styles.navIcon} ${isCollapsed ? styles.navIconCollapsed : ''}`} />
                  <span className={isCollapsed ? styles.navTextHidden : styles.navText}>
                    Design Store
                  </span>
                </div>

                <div 
                  className={`${styles.navItem} ${styles.subNavItem} ${isCollapsed ? styles.subNavItemCollapsed : ''} ${isActiveRoute('/design-standards') ? styles.navItemActive : ''}`}
                  onClick={() => handleNavigation('/design-standards')}
                  title={isCollapsed ? 'Design Standards' : ''}
                >
                  <Settings24Regular className={`${styles.navIcon} ${isCollapsed ? styles.navIconCollapsed : ''}`} />
                  <span className={isCollapsed ? styles.navTextHidden : styles.navText}>
                    Design Standards
                  </span>
                </div>
                
                <div 
                  className={`${styles.navItem} ${styles.subNavItem} ${isCollapsed ? styles.subNavItemCollapsed : ''} ${isActiveRoute('/reviews') ? styles.navItemActive : ''}`}
                  onClick={() => handleNavigation('/reviews')}
                  title={isCollapsed ? 'Reviews' : ''}
                >
                  <DocumentTable24Regular className={`${styles.navIcon} ${isCollapsed ? styles.navIconCollapsed : ''}`} />
                  <span className={isCollapsed ? styles.navTextHidden : styles.navText}>
                    Reviews
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${styles.main} ${isCollapsed ? styles.mainCollapsed : ''}`}>
        <div className={styles.pageHeader}>
          <Title3>
            {location.pathname === '/intake' || location.pathname === '/' ? 'All Intake Forms' :
             location.pathname === '/reviews' ? 'Network Design Reviews' :
             location.pathname === '/design-standards' ? 'Design Standards' :
             location.pathname === '/design-store' ? 'Design Store' :
             location.pathname.startsWith('/design') ? 'Design Editor' :
             'Network Design Engineering'}
          </Title3>
          {location.pathname === '/reviews' && (
            <Button appearance="primary">
              + Design Review
            </Button>
          )}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
