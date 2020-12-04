export default {
  headerContainer: {
    backgroundColor: '#FFF',
    borderBottom: '4px solid #105BA1',
    opacity: '1',
    paddingTop: '30px',
    position: 'absolute',
    top: '0',
    width: '100%',
  },
  contentContainer: {
    margin: '0 auto',
    width: '75%',
  },
  navigation: {
    width: '100%',
  },
  navigationHeader: {
    float: 'left',
  },
  logo: {
    maxWidth: '350px',
    width: '90%',
  },
  navigationOptionsContainer: {
    display: 'block',
  },
  navigationOptions: {
    position: 'relative',
    float: 'right',
    margin: '0',
  },
  navigationOptionContainer: {
    display: 'inline-block',
  },
  navigationOption: (active) => {
    const baseClass = {
      color: '#999',
      fontSize: '17px',
      lineHeight: '50px',
      paddingLeft: '15px',
      paddingRight: '15px',
      textDecoration: 'none',
    }
    const activeClass = {
      color: '#105da1',
      fontWeight: 'bold',
    }

    return {
      ...baseClass,
      ...(active ? activeClass : {}),
    }
  },
}
