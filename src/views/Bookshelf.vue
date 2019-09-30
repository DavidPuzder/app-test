<template>
	<div class="bookshelf">
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Knižnica
					</h1>
					<h2 class="subtitle">
						Zoznam kníh
					</h2>
				</div>
			</div>
		</section>
		<div class="columns is-gapless is-multiline">
			<div class="column is-one-fifth">
				<nav class="panel">
					<p class="panel-heading">
						Vyhľadávanie kníh
					</p>
					<div class="panel-block">
						<p class="control has-icons-left">
							<input
								class="input is-small"
								type="text"
								placeholder="názov knihy, autor, kategória, rok"
								v-model="searchInput"
							>
							<span class="icon is-small is-left">
								<i
									class="fas fa-search"
									aria-hidden="true"
								></i>
							</span>
						</p>
					</div>
					<p class="panel-tabs">
						<a class="is-active">all</a>
						<a>public</a>
						<a>private</a>
						<a>sources</a>
						<a>forks</a>
					</p>
					<a class="panel-block is-active">
						<span class="panel-icon">
							<i
								class="fas fa-book"
								aria-hidden="true"
							></i>
						</span>
						bulma
					</a>
					<a class="panel-block">
						<span class="panel-icon">
							<i
								class="fas fa-book"
								aria-hidden="true"
							></i>
						</span>
						marksheet
					</a>
					<a class="panel-block">
						<span class="panel-icon">
							<i
								class="fas fa-book"
								aria-hidden="true"
							></i>
						</span>
						minireset.css
					</a>
					<a class="panel-block">
						<span class="panel-icon">
							<i
								class="fas fa-book"
								aria-hidden="true"
							></i>
						</span>
						jgthms.github.io
					</a>
					<a class="panel-block">
						<span class="panel-icon">
							<i
								class="fas fa-code-branch"
								aria-hidden="true"
							></i>
						</span>
						daniellowtw/infboard
					</a>
					<a class="panel-block">
						<span class="panel-icon">
							<i
								class="fas fa-code-branch"
								aria-hidden="true"
							></i>
						</span>
						mojs
					</a>
					<label class="panel-block">
						<input type="checkbox">
						remember me
					</label>
					<div class="panel-block">
						<button class="button is-link is-outlined is-fullwidth">
							reset all filters
						</button>
					</div>
				</nav>
			</div>
			<div class="column">
				<div
					class="notification"
					v-if="searchInput.length > 0"
				>
					Zobrazovanie výsledkov pre <strong>{{ searchInput }}</strong>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchInput: ""
		};
	}
};
</script>>
