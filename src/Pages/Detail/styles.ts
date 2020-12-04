import { CSSProperties } from 'react'

import { Styles } from '../../types'

const styles: Styles = {
  container: {
    flexGrow: 1,
  },
  goBack: {
    color: '#535b60',
    cursor: 'pointer',
    fontSize: '14px',
  },
  projectsList: {
    display: 'flex',
    width: '60%',
    margin: '0 auto',
  },
  menuContainer: {
    marginRight: '50px',
    marginTop: '50px',
    minWidth: '110px',
  },
  listContainer: {
    width: '100%',
  },
  menuTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    textDecoration: 'underline',
  },
  body: {
    fontSize: '18px',
    lineHeight: '1.5',
    margin: '50px auto',
    width: '60%',
  },
}

export default styles
