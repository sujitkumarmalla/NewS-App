import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div>
        <div className="w-16 h-16 border-4 border-dotted border-blue-600 rounded-full animate-spin"></div>
      </div>
    )
  }
}
