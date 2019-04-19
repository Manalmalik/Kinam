import * as d3 from "d3";

const frequencyData = new Uint8Array(200);
const svgHeight = 300;
const svgWidth = 1200;

export class Visualizer {
  audioCtx;
  audioCt;
  audioElement;
  audioSrc;
  analyser;

  //frequencyData = new Uint8Array(analyser.frequencyBinCount);

  barPadding = 1;

  svg;

  constructor(src) {
    this.audioCtx = new (window["AudioContext"] ||
      window["webkitAudioContext"] ||
      AudioContext)();
    this.audioElement = document.createElement("audio");
    this.audioElement.src = src;
    this.audioSrc = this.audioCtx.createMediaElementSource(this.audioElement);
    this.analyser = this.audioCtx.createAnalyser();

    // Bind our analyser to the media element source.
    this.audioSrc.connect(this.analyser);
    this.audioSrc.connect(this.audioCtx.destination);

    this.svg = this.createSvg("body", svgHeight, svgWidth);

    // Create our initial D3 chart.
    this.svg
      .selectAll("rect")
      .data(frequencyData)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
        return i * (svgWidth / frequencyData.length);
      })
      .attr("width", svgWidth / frequencyData.length - this.barPadding);

    requestAnimationFrame(this.renderChart);

    // Copy frequency data to frequencyData array.
    this.analyser.getByteFrequencyData(frequencyData);

    // Update d3 chart with new data.
    this.svg
      .selectAll("rect")
      .data(frequencyData)
      .attr("y", function(d) {
        return svgHeight - d;
      })
      .attr("height", function(d) {
        return d;
      })
      .attr("fill", function(d) {
        return "rgb(0, 0, " + d + ")";
      });
  }

  createSvg(parent, height, width) {
    return d3
      .select(parent)
      .append("svg")
      .attr("height", height)
      .attr("width", width);
  }

  // Continuously loop and update chart with frequency data.
  renderChart() {
    requestAnimationFrame(this.renderChart);

    // Copy frequency data to frequencyData array.
    this.analyser.getByteFrequencyData(frequencyData);

    // Update d3 chart with new data.
    this.svg
      .selectAll("rect")
      .data(frequencyData)
      .attr("y", function(d) {
        return svgHeight - d;
      })
      .attr("height", function(d) {
        return d;
      })
      .attr("fill", function(d) {
        return "rgb(0, 0, " + d + ")";
      });
  }
}
