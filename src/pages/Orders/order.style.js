import color from '../../constant/color'

const styles = {
    bg: {
        height: "100vh",
        background: color.background
    },

    main: {
        pt: 3,
        maxWidth: '1100px !important',
        paddingLeft: '108px !important',
    },

    title1Wrapper: {
        display: "flex",
        justifyContent: 'space-between',
        mb: 1,

    },

    title1: {
        fontSize: '30px',
        fontWeight: 'bold',
    },

    graphContent: {

    },

    graphWrapper: {
        background: 'white',
        borderRadius: '15px',
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


}

export default styles;