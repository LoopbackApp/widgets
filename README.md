# widgets

Loopback's available widgets.

## URL query string parameters

Use these on any URL that display sa Loopback widget.

### `?loopback-widget-draft`

- Internal and external use
- `widget-svelte`
  - Load the widget CSS with the `?loopback-widget-draft` query string parameter

### `?loopback-widget-dev`

- Loopback internal use
- `widget-svelte`
  - Load the widget CSS from http://localhost:5173
  - Submit feedback to http://localhost:5173/api/feedback
- `loopback.js `
  - Load the `ce.js` file from http://localhost:5176/dist
