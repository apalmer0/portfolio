export default {
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
  menuOption: (active) => {
    const baseClass = {
      cursor: 'pointer',
      fontSize: '14px',
      marginBottom: '5px',
    };
    const activeClass = {
      color: '#105da1',
      fontSize: '18px',
    };

    return {
      ...baseClass,
      ...(active ? activeClass : {}),
    };
  },
  body: {
    fontSize: '18px',
    lineHeight: '1.5',
    margin: '50px auto',
    width: '60%',
  }
};
