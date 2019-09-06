import React, { Component } from "react";
import { Checkbox } from "antd";
import "./PictureSelect.css";
const CheckboxGroup = Checkbox.Group;

class PictureSelect extends Component {
  state = {
    checkAll: false,
    indeterminate: true,
    value: [],
    pictures: []
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);

    if (props.value !== state.value || props.pictures !== state.pictures) {
      return {
        value: props.value,
        pictures: props.pictures
      };
    }

    return state;
  }

  componentDidMount() {
    
  }

  onCheckAllChange = e => {
    let checked = e.target.checked;
    //全选
    if (checked) {
      let pictures = this.props.pictures;
      let picturesOptions = [];
      pictures.map(item => {
        // 获取所有多选框的值
        picturesOptions.push(item.id);
        return item;
      });
      // 设置当前选中值为所有值
      this.props.onChange([...picturesOptions]);
      this.setState({
        checkAll: true
      });
    } else {
      // 取消全选
      this.props.onChange([]);
      this.setState({
        checkAll: false
      });
    }
  };

  onChange = checkedList => {
    this.props.onChange([...checkedList]);
    let pictures = this.state.pictures;
    // 如果全选
    if (checkedList.length === pictures.length) {
      this.setState({
        checkAll: true,
        indeterminate: false
      });
      // 选择部分
    } else if (checkedList.length < pictures.length && checkedList.length > 0) {
      this.setState({
        checkAll: false,
        indeterminate: true
      });
    } else {
      // 不选择
      this.setState({
        checkAll: false,
        indeterminate: false
      });
    }
  };

  render() {
    const { pictures, value } = this.state;
    return (
      <div className="picture-select">
        <div className="check-all">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            已勾选{value.length}个文件
          </Checkbox>
        </div>

        <div>
          {pictures && pictures.length > 0 ? (
            <CheckboxGroup onChange={this.onChange} value={value}>
              {pictures.map((item, index) => {
                return (
                  <Checkbox
                    key={item.id}
                    value={item.id}
                  >
                    <img src={item.url} alt="" />
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          ) : null}
        </div>
      </div>
    );
  }
}

export default PictureSelect;
