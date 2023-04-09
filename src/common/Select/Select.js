import Select from "react-select";
import "./select.css"
const SelectCompnent = ({title, ...rest }) => {
  return (
    <div className="select">
      <label>{title}</label>
      <Select {...rest} />
    </div>
  );
};
export default SelectCompnent;
