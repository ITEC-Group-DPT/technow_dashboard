import color from '../../constant/color'

const styles = {
    bg: {
        background: color.background,
        minHeight: '100vh',
    },

    main: {
        py: 5,
        maxWidth: '1300px !important',
        paddingLeft: '108px !important',
        height: '100%',
    },

    title1Wrapper: {
        display: "flex",
        justifyContent: 'space-between',
        mb: 2,
    },

    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },

    graphContent: {

    },

    graphWrapper: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px 1px #d5d6d8',
        pt: 3,
        pb: 2,
        px: 4,
        minHeight: '340px',
    },

    lineTitleWrapper: {
        display: 'flex',

    },

    graphTitle: {
        textAlign: 'center',
        fontSize: '19px',
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
        boxShadow: '0px 1px #d5d6d8',
        minHeight: '420px',
        pt: 6,
        pb: 1,
        pl: 9,
        pr: 9,
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
    },

    textEnd: {
        textAlign: 'end',
    },
}

export default styles;