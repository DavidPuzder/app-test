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
								@change="getBook(searchInput)"
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

				<div
					class="card book"
					v-for="book in books"
					:key="book.id"
				>
					<div class="card-content">
						<div class="content">
							<div class="columns">
								<div class="column is-one-fifth"></div>
								<div class="column">
									<div class="title">{{ book.volumeInfo.title}}</div>
									<div class="subtitle">{{ book.volumeInfo.subtitle}}</div>
									<div class="authors">
										<span
											v-for="author in book.volumeInfo.authors"
											:key="author"
										>{{ author }} </span>
									</div>
								</div>
								<div class="column"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

let apiKey = "AIzaSyAQ1kNKntSFmSxtFzo7qB-7SqgB50Yd_ok";

export default {
	data() {
		return {
			searchInput: "",
			books: []
		};
	},
	methods: {
		getBook(searchInput) {
			axios
				.get(
					"https://www.googleapis.com/books/v1/volumes?q=" +
						encodeURI(searchInput) +
						":keyes&key=" +
						apiKey
				)
				.then(response => (this.books = response.data.items));
		}
	}
};
</script>>

<style lang="scss" scoped>
.card {
	&.book {
		text-align-last: left;
		.title {
			font-size: 1.3em;
		}
	}
}
</style>
