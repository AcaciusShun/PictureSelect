import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './PictureSelect.css'
const CheckboxGroup = Checkbox.Group;

class PictureSelect extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        value: this.props.value
    };

    componentDidMount() {
        console.log(this.props)
    }



    render() {

        const { pictures, value, onChange } = this.props

        return (
            <div className="picture-select">
                <div className="check-all">
                    <Checkbox
                    // indeterminate={this.state.indeterminate}
                    // onChange={this.onCheckAllChange}
                    // checked={this.state.checkAll}
                    >
                        已勾选{value.length}个文件
                    </Checkbox>
                </div>
                <div>
                    {pictures && pictures.length > 0 ?
                        <CheckboxGroup
                            onChange={onChange}
                            value={value}
                        >
                            {pictures.map((item, index) => {

                                return (
                                    <Checkbox
                                        key={item.id}
                                        value={item.id}
                                    // indeterminate={this.state.indeterminate}

                                    >

                                        <img src={item.url} alt="" />
                                    </Checkbox>
                                )

                            })}
                        </CheckboxGroup>


                        : null
                    }
                </div>

            </div>
        )
    }

}

export default PictureSelect;