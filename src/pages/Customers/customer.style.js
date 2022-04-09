import color from '../../constant/color'

const Style = {
    //charts
    title: {
        fontSize: "36px",
        fontWeight: 700,
        textAlign: "left",
        marginBottom: "1rem",
        fontFamily: 'Roboto',
    },


    titleWrapper: {
        display: "flex",
        justifyContent: "space-between",
        mb: 1,
    },


    chart: {
        background: color.white,
        borderRadius: "15px",
        boxShadow: '0px 1px #d5d6d8',
        paddingLeft: "12px",
        py: "16px",
        width:"100%",
    },


    chartTitle: {
        fontSize: "20px",
        fontWeight: 700,
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        mb: 2,
    },



    //leaderboard
    leaderboard: {
        display: "block",
        background: color.white,
        borderRadius: '15px',
        boxShadow: '0px 1px #d5d6d8',
        p: '0px 37px',
        height: "100%",
        position: "relative"
    },

    boardRow: {
        // paddingLeft: "60px",
        //paddingTop: "20px",
        my: 2,
    },

    paginationBox: {
        paddingTop: '20px',
        paddingBottom: '10px',
        position: 'absolute',
        bottom: "10px",
        display:"flex",
        left: 0,
        justifyContent:"center",
        width:"100%",
    },

    firstRank: {
        color: color.gold,
        background: color.lightGold,
        padding: '3px 10px',
        borderRadius: '5px'
    },

    secondRank: {
        color: color.silver,
        background: color.lightSilver,
        padding: '3px 10px',
        borderRadius: '5px'
    },

    thirdRank: {
        color: color.bronze,
        background: color.lightBronze,
        padding: '3px 10px',
        borderRadius: '5px'
    },

    noRank: {
        padding: '3px 10px',
    },

    searchNotFound: {
        textAlign: 'center',
        mt: 6,
		fontSize: '20px',
		color: color.lightGrayText,
    },
};

export default Style;