import color from '../../constant/color'

const Style = {
    //charts
    title: {
        fontSize: "32px",
        fontWeight: 700,
        textAlign: "left",
        marginBottom: "1rem"
    },


    titleWrapper: {
        display: "flex",
        justifyContent: "space-between"
    },


    chart: {
        marginBottom: "2rem",
        background: color.white,
        borderRadius: "15px",
        paddingLeft: "45px",
        py: "16px",

    },


    chartTitle: {
        fontSize: "22px",
        fontWeight: 500,
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px"
    },



    //leaderboard
    leaderboard: {
        display: "block",
        background: color.white,
        paddingTop: "20px",
        borderRadius: '15px',
        minHeight: "88vh",
        position: "relative"
    },

    boardTitle: {
        paddingLeft: "50px",
        paddingTop: "20px",
        paddingBottom: "10px"
    },

    boardRow: {
        paddingLeft: "60px",
        paddingTop: "20px",
    },

    paginationBox: {
        paddingTop: '20px',
        paddingBottom: '10px',
        position: 'absolute',
        bottom: "10px",
        display:"flex",
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
    }
};

export default Style;