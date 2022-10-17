import Select from "react-select";
const SelectCompnent = ({title, ...rest }) => {
  return (
    <div>
      <label>{title}</label>
      <Select {...rest} />
    </div>
  );
};
export default SelectCompnent;
