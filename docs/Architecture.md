## Architecture
The driving goal of the architecture of the boilerplate is separation of concerns. Namely:

- Presentational are separated.
You will find your components much easier to reuse and think about if you divide them into three categories. I call them Container, Components and Views, but I also heard Fat, Skinny and Presentation, Smart and Dumb, Stateful and Pure, Screens, components and containers, etc. All of these are not exactly the same, but the main idea is similar.
	- View
	- Components
	- Container

- State is managed using global Redux stores.

- Application side-effects (API calls, etc.) are separated from UI and state manipulation using Redux Saga.