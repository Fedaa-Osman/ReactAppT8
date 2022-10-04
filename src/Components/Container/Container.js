import './Container.css'

const Container = () => {
    return (
        <div>
            <div className="section">
                <div className="left-column">
                    <div className="on-l-pic">
                        <h1>We Are Hexashop</h1>
                        <i>Awesome, clean & creative HTML5 template</i>
                        <br/>
                        <button className="butt">Purchase Now!</button>
                    </div>
                </div>
                <div className="right-column">
                    <div className="row1">
                        <div className="women">
                            <div className="on-r-pic">
                                <h2>Women</h2>
                                <i>Best Clothes For Women</i>
                            </div>
                        </div>
                        <div className="men">
                            <div className="on-r-pic">
                                <h2>Men</h2>
                                <i>Best Clothes For Men</i>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="kids">
                            <div className="on-r-pic">
                                <h2>Kids</h2>
                                <i>Best Clothes For Kids</i>
                            </div>
                        </div>
                        <div className="access">
                            <div className="on-r-pic">
                                <h2>Accessories</h2>
                                <i>Best trend Accessories</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Container