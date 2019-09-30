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
						>Domov</a>
					</router-link>

					<router-link
						to="/bookshelf"
						v-slot="{ href, route, navigate, isActive, isExactActive }"
					>
						<a
							:href="href"
							@click="navigate"
							class="navbar-item"
							:class="[isActive && 'navbar-item', isExactActive && 'navbar-item is-active']"
						>Knižnica</a>
					</router-link>
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
</style>
