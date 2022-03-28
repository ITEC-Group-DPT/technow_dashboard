import color from '../../constant/color'

const styles = {
    bg: {
        background: color.background
    },

    main: {
        pt: 5,
        maxWidth: '1200px !important',
        paddingLeft: '108px !important',
        height: '100%',
        pb: 5,
    },

    title1Wrapper: {
        display: "flex",
        justifyContent: 'space-between',
        mb: 2,
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
        pt: 3,
        pb: 2,
        px: 4,
    },

    lineTitleWrapper: {
        display: 'flex',

    },

    graphTitle: {
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
    },

    labelWrapper: {
        display: 'flex',
        alignItems: 'end',
    },

    label: {
        color: '#868686',
        fontSize: '13px',
        fontWeight: 500,

    },

    title2Wrapper: {
        mt: 5,
        mb: 2,
    },

    orderContent: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px .5px #d5d6d8',
        pt: 4,
        pb: 0.1,
        pl: 8,
        pr: 8,
    },

    controlWrapper: {
        height: "37px",
        mb: 4,
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
        mt: 2,
        mb: 3,
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