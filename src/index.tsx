/* @jsx h */
import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: "custom-element",
  styleUrl: "index.scss",
  shadow: true
})
class HelloComponent {
  @Prop({ reflect: true }) name: string;
  render() {
    return <button>Hello {this.name ? this.name : "World"}</button>;
  }
}
