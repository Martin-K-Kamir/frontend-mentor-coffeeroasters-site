# Frontend Mentor - Coffeeroasters site

![preview of order summary card](./preview.jpg)

This is a challenge from [Frontend Mentor](https://www.frontendmentor.io/). Coded by [me](https://www.frontendmentor.io/profile/Martin-K-Kamir)! 😁

Welcome to the repository for this project. Feel free to look around and explore! 😀

### Tools

- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [open-props](https://open-props.style/)
- [Gerillass](https://gerillass.com/)
- [Every layout](https://every-layout.dev/)

### Development
Before I started working on this project. I focused on making my sass library and generating
all the utility classes and CSS custom variables from sass mixins/functions are based on the $config map.
```
// sass/base/_utilities.scss

:root {
	@include generator($config);
}

// sass/abstracts/_config.scss

$config : (
		'font-types' : (
				'src' : $list-of-font-sizes,
		),
		'fluid-font-types' : (
				'src' : $list-of-fluid-font-sizes,
		),
		'space-types' : (
				'base' : 1.35rem,
				'ratio' : 'major-third',
				'length' : 11,
		),
		'fluid-space-types' : (
				'src' : $list-of-fluid-space-sizes,
		),
		'color-types' : (
				'src' : $map-for-colors,
		),
		'properties' : (
				$map-for-line-heights,
				$map-for-font-weights,
				$map-for-radius,
				$map-for-measure,
				$map-for-easing,
				$map-for-fonts,
				$map-for-shadows
		),
		'classes' : (
				$map-for-line-heights,
				$map-for-font-weights,
				$map-for-radius,
				$map-for-measure,
				$map-for-fonts,
				$map-for-auto-margins,
		),
)
```

The config map accepts multiple parameters. Which modifies the output of generator mixin. With this project, I used more custom values. That's why there are so many maps and lists. Only the 'space-types' key is using generated type scale.
By using this generator mixin increased my speed in the development of this site. 

With this project, I mainly focused on new features in CSS, custom CSS variables, global inheritance, reusable layouts, and utility classes.
Making the CSS dry not repeating the same styles over and over on different components.
The react code could be better written but I am new to react and at this moment I mainly focus on CSS and sass.


### Links

- Live Site URL - [Link](https://coffeeroasters-martin-kamir.netlify.app/)
- Website - [Martin Kamír](https://martinkamir.com/)
- Frontend Mentor - [@Martin-K-Kamir](https://www.frontendmentor.io/profile/Martin-K-Kamir)
- Frontend Mentor Solution - [Solution link](https://www.frontendmentor.io/solutions/ceative-website-using-sass-react-postcss-Hy_EMdhr5)

Happy coding! 😄
