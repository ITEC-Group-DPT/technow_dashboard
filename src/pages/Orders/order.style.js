import color from '../../constant/color'

const styles = {
    bg: {
        height: "100vh",
        background: color.background
    },

    main: {
        pt: 3,
        maxWidth: '1200px !important',
        paddingLeft: '108px !important',
    },

    title1Wrapper: {
        display: "flex",
        justifyContent: 'space-between',
        mb: 1,

    },

    title: {
        fontSize: '28px',
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
        pl: 4,
        pr: 4,
    },

    graphTitle: {
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold',
        mb: 1,
    },

    title2Wrapper: {
        mt: 3,
        mb: 2,
    },

    orderContent: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px .5px #d5d6d8',
        pt: 5,
        pb: 2,
        pl: 8,
        pr: 8,
    },

    controlWrapper: {
        height: "35px",

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
        height: "400px",

    },


}

export default styles;