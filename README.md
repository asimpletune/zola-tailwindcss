# zola-tailwindcss

This project is a GitHub template for creating web projects that use the [Zola](https://getzola.org) static site generator, in conjunction with [Tailwindcss](https://tailwindcss.com)

Below are some details that will help you get started.

## Usage

Start by visiting the [project's GitHub repository](https://github.com/asimpletune/zola-tailwindcss), and then click use the template and "create a new repository".

![Create a new repository](https://zola-tailwind.spenc.es/screenshot.png)

Here's how you do stuff:

* `npm install`   installs everything that you need
* `npm run build` builds once, output will be in the `public` directory
* `npm run serve` starts a local server that binds to `0.0.0.0:1111`, and watches the respective directories, rebuilding upon every change.

For example, you can run `npm run serve` and then go to `localhost:1111` in your browser to see the websites. As you make changes to the code or content, the website will be updated.

### Customization

To use this for your own project you will probably want to take the following steps to customize (since GitHub doesn't yet support templating variables for GH template repos):

1. Change `base_url` in `config.toml` to your website's URL
2. Use whatever `LICENSE` file that you want (default is MIT)
2. Add anything you might want in the `package.json` file, i.e. `name`, `author`, and `license` are the bare minimum

Here's an example

```json
{
  "name": "<YOUR_PROJECT>",
  "version": "1.0.0",
  "description": "<DESCRIPTION_OF_YOUR_PROJECT>",
  "scripts": {
    "build": "zola build && npx tailwindcss -i ./public/input.css -o ./public/style.css -m",
    "serve": "zola serve --interface 0.0.0.0 & npx tailwindcss -i ./public/input.css -o ./public/style.css --watch && wait",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "<YOUR_PROJECT_REPO>"
  },
  "author": "<YOUR_NAME>",
  "license": "<LICENSE_NAME>",
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.9",
    "tailwindcss": "^3.3.1"
  }
}
```

## Content

Content is stored in [markdown text](https://commonmark.org/help/) files located within the `content` directory. Files named `_index.md` are called "sections", and files by any other name ending in `.md` are called "pages". For more information you can read the [zola](https://getzola.org) documentation. It is written in markdown and inserted into the html via the "[template](#templates)", which is indicated on the top of the content.

## Templates

Templates are in the `templates` directory. Their purpose is to decide where in the html the content goes. The content is accessible to the template as a variable named either `section.content` or `page.content`, depending on the context.

## Styling

This website uses [tailwindcss](https://tailwindcss.com/) for most of its styling. Additional styling can be added in the `sass/input.scss` file, but usually it is not necessary to add any custom styling. This file is compiled by zola from sass into normal css, and then from there it is read by tailwind which adds whatever additional styling is referenced in the html, resulting in a file called `style.css`, which is what is used by the website.

### Typography

Since Zola generates content from markdown files, the Typography plugin is more or less mandatory.

The tailwind [typography plugin](https://tailwindcss.com/docs/typography-plugin) is used to style content that is generated from markdown. Any child elements that are nested within an element that has the class `prose` will receive the styling. The default styling can further be customized in the `tailwind.config.js` file.

## Dependencies and Tools

* [zola](https://getzola.org)
* [tailwindcss](https://tailwindcss.com/)
* [tailwind typography plugin](https://tailwindcss.com/docs/typography-plugin)
* [npm](http://npmjs.com)

## Notes:

* The `npm run serve` script runs two long-running tasks in parallel and allows both to write simultaneously to STDOUT by using [a mixture of `wait` and sending jobs to the background](https://www.cyberciti.biz/faq/how-to-run-command-or-code-in-parallel-in-bash-shell-under-linux-or-unix/)
* Sometimes important changes for styling need to be made in the `tailwind.config.js` file