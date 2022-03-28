import color from '../../constant/color'

const styles = {
    bg: {
        height: "100vh",
        background: color.background
    },

    main: {
        pt: 2,
        maxWidth: '1200px !important',
        paddingLeft: '108px !important',
        height: '100%',
        overflow: 'hidden',
    },

    title1Wrapper: {
        display: "flex",
        justifyContent: 'space-between',
        mb: 1,
    },

    title: {
        fontSize: '27px',
        fontWeight: 'bold',
    },

    graphContent: {

    },

    graphWrapper: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px .5px #d5d6d8',
        pt: 2,
        pb: 1,
        px: 4,
    },

    lineTitleWrapper: {
        display: 'flex',

    },

    graphTitle: {
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold',
    },

    labelWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    label: {
        color: '#868686',
        fontSize: '12px',
        fontWeight: 500,

    },

    title2Wrapper: {
        mt: 2,
        mb: 1,
    },

    orderContent: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px .5px #d5d6d8',
        pt: 3,
        pb: 0.1,
        pl: 8,
        pr: 8,
    },

    controlWrapper: {
        height: "35px",
        mb: 3,

    },

    centerHori: {
        height: "100%",
        display: "flex",
        justifyContent: 'center',
    },

    endHori: {
        height: "100%",
        display: "flex",
        justifyContent: 'end',
    },

    tableWrapper: {


    },

    divider: {
        borderColor: "#EAEAEA",
        mt: 1,
        mb: 2,
    },

    tableHeader: {
        fontWeight: 700,
        fontSize: '17px',
    },

    priceHeaderItem: {
        display: 'flex',
        justifyContent: 'center',
    },

    priceHeaderWrapper: {
        width: '110px',
    },

    priceHeader: {
        textAlign: 'end',
    },

    textCenter: {
        textAlign: 'center',
    }


}

export default styles;