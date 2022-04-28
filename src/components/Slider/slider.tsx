import { action, observable } from "mobx";
import { observer } from "mobx-react";
import { ChangeEvent, Component, InputHTMLAttributes } from "react";

interface SliderProps extends InputHTMLAttributes<{}> {}

// Public - full access
// Private - limited
// Protected - access via inheritance

@observer
export default class Slider extends Component<SliderProps> {

  @observable
  private value: number = 1;

  @action
  public onChange(event: ChangeEvent<HTMLInputElement>) {
    this.value = Number(event.target.value);
    this.forceUpdate();
  };

  render() {
    const { min = 1, max = 5 } = this.props;
    return (
      <div style={{ width: '150px' }}>
        <div style={{ display: 'flex' }}>
          <input
            style={{ width: '100%' }}
            min={min}
            max={max}
            value={this.value || 1} 
            step={1}
            type="range" 
            onChange={(e) => this.onChange(e)} 
          />
          <span>{this.value}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>{min}</div>
          <div>{max}</div>
        </div>
      </div>
    )
  }
}