import React from 'react'
import './css/resizableColumns.css'

class ResizableColumns extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isResizing: false,
            lastDownX: 0,
            offset: 0,
            minOffset: 300
        }
    }

    componentDidMount() {
        let handle = document.querySelector('.colResizeHandle')
        let container = document.getElementById('colResizeWrapper')
        let offset = container.offsetWidth - 300;

        let self = this
        self.setState({
            offset
        })

        handle.addEventListener("mousedown", function (e) {
            self.setState({
                isResizing: true,
                lastDownX: e.clientX
            })
        })

        document.addEventListener('mousemove', function (e) {
            if (!self.state.isResizing) return;
            let offset = container.offsetWidth - (e.clientX - container.offsetLeft);
            self.setState({
                offset: offset <= self.state.minOffset ? self.state.minOffset : offset
            })

        })
        document.addEventListener('mouseup', function () {
            self.setState({
                isResizing: false
            })
        });
    }

    render() {
        if (this.props.children)
            return <div className={'demo'}>
                <div className={'topbar'}>Top Bar</div>
                <div className={'sidebar'}> Side bar</div>
                <div className={'container'}>
                    <div className={'colResizeWrapper'} id={'colResizeWrapper'}>
                        <div className={'colResizeLeft'}
                             style={{right: this.state.offset}}>
                            <div className={'colResizeFullCol'}>
                                {this.props.children[0]}
                            </div>
                        </div>
                        <div className={'colResizeRight'} style={{width: this.state.offset}}>
                            <div className={'colResizeHandle'}></div>
                            <div style={{overflowY: 'auto'}}>
                                {this.props.children[1]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        else
            return <React.Fragment/>
    }
}

export default ResizableColumns;