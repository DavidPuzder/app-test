<template>
	<div id="app">
		<nav
			class="navbar is-light"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="navbar-brand">
				<a
					class="navbar-item"
					href="/"
				>
					<img src="@/assets/logo.png">
				</a>

				<a
					role="button"
					class="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div
				id="navbarBasicExample"
				class="navbar-menu"
			>
				<div class="navbar-start">

					<router-link
						to="/"
						v-slot="{ href, route, navigate, isActive, isExactActive }"
					>
						<a
							:href="href"
							@click="navigate"
							class="navbar-item"
							:class="[isActive && 'navbar-item', isExactActive && 'navbar-item is-active']"
						>Home</a>
					</router-link>

					<router-link
						to="/about"
						v-slot="{ href, route, navigate, isActive, isExactActive }"
					>
						<a
							:href="href"
							@click="navigate"
							class="navbar-item"
							:class="[isActive && 'navbar-item', isExactActive && 'navbar-item is-active']"
						>About</a>
					</router-link>

					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">
							More
						</a>

						<div class="navbar-dropdown">
							<a class="navbar-item">
								About
							</a>
							<a class="navbar-item">
								Jobs
							</a>
							<a class="navbar-item">
								Contact
							</a>
							<hr class="navbar-divider">
							<a class="navbar-item">
								Report an issue
							</a>
						</div>
					</div>
				</div>

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-primary">
								<strong>Sign up</strong>
							</a>
							<a class="button is-light">
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
@import "bulma/bulma";

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
