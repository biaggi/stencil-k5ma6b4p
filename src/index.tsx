/* @jsx h */
import { h, Component, Prop, Listen } from "@stencil/core";

@Component({
  tag: "custom-element",
  styleUrl: "index.scss",
  shadow: true
})
class HelloComponent {
  @Prop({ reflect: true }) name: string;

  @Listen("click", { capture: true })
  handleClick() {
    this.name = "test";
  }
  render() {
    return <span>Hello {this.name ? this.name : "World"}</span>;
  }
}
