function TipsAndAdvice() {
    return (
        <div className="wrapper">
            <div className="tipsAndAdviceContainer">
                <div className="tipsTitleContainer">
                    <h2>Learn from others who have successfully negotiated their salary and made it in tech.</h2>
                </div>
                <div className="tipsSearchFilterResultsContainer">
                    <div className="searchAndFilterContainer">
                        <div className="searchContainer">
                            <label htmlFor="searchAdvice"></label>
                            <input type="text" name="searchAdvice" placeholder="Search title, city, ect."/>
                        </div>
                        <div className="filterContainer">
                            <button className="filterTips">Filters</button>
                        </div>
                    </div>
                    <div className="recentDataContainer">
                        <h4>Recent Data</h4>
                        <p><span className="totalSubmissions">total submissions</span></p>
                    </div>
                </div>
                <div className="adviceCardContainer">
                    <div className="cardContainer">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TipsAndAdvice; 