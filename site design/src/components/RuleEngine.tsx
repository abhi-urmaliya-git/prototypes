import { useState } from 'react'
import {
  Button,
  Body1,
  makeStyles,
  shorthands,
  tokens,
  Textarea,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: 'calc(100vh - 125px)',
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('40px'),
    ...shorthands.gap('40px'),
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
    maxWidth: '50%',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
    maxWidth: '50%',
  },
  sectionTitle: {
    marginBottom: '12px',
    fontSize: '16px',
    fontWeight: '600',
  },
  textArea: {
    minHeight: '180px',
    fontFamily: 'Segoe UI',
    fontSize: '14px',
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusSmall,
    resize: 'vertical',
    width: '100%',
    ...shorthands.padding('12px'),
  },
  submitButton: {
    width: '100%',
    marginTop: '20px',
    minHeight: '40px',
  },
  rulesSection: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
  },
  ruleButton: {
    width: '100%',
    justifyContent: 'center',
    minHeight: '48px',
    fontSize: '14px',
    fontWeight: '600',
  },
  approvalButton: {
    width: '100%',
    minHeight: '40px',
    fontSize: '14px',
  },
})

export default function RuleEngine() {
  const styles = useStyles()
  const [newRule, setNewRule] = useState('')

  return (
    <div className={styles.container}>
      {/* Left Section - Add New Rule */}
      <div className={styles.leftSection}>
        <Body1 className={styles.sectionTitle}>Add New Rule</Body1>
        <Textarea
          className={styles.textArea}
          value={newRule}
          onChange={(_, data) => setNewRule(data.value)}
          placeholder="e.g. Aruba 6360 - is only for greenfield. Only - 1 for non HA & 2 HA"
        />
        <Button 
          appearance="primary" 
          className={styles.submitButton}
        >
          Submit
        </Button>
      </div>

      {/* Right Section - Rules */}
      <div className={styles.rightSection}>
        <Body1 className={styles.sectionTitle}>Rules</Body1>
        
        <div className={styles.rulesSection}>
          <Button 
            appearance="primary" 
            className={styles.ruleButton}
          >
            Start Reasoning Engine
          </Button>
          
          <Button 
            appearance="outline" 
            className={styles.approvalButton}
          >
            Submit For Approval
          </Button>
        </div>
      </div>
    </div>
  )
}
