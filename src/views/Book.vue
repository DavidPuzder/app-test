<template>
	<div class="book">
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Zobrazenie knihy
					</h1>
					<h2 class="subtitle">
						{{ book.title }}
					</h2>
				</div>
			</div>
		</section>
		<div class="columns is-multiline">
			<div class="column is-full">
				<div class="card">
					<div class="container is-fluid">
						<div class="columns">
							<div class="column is-6-tablet">
								<router-link
									to="/bookshelf"
									v-slot="{ href, route, navigate, isActive, isExactActive }"
								>
									<a
										:href="href"
										@click="navigate"
										class="button is-fullwidth"
									>
										<i class="material-icons">arrow_back_ios</i>
										Späť na knihy</a>
								</router-link>
							</div>
							<div class="column is-6-tablet">
								<a class="button is-fullwidth">
									<i class="material-icons">face</i>
									Pridať knihu žiakovi</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="column is-6">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">Kniha {{ book.title }}</p>
					</header>
					<div class="card-content">
						<div class="content">
							<div class="columns is-multiline has-text-left">
								<div
									class="column is-12"
									v-if="book.authors"
								>
									<p><strong>Autor:</strong> {{ book.authors | split }}</p>
								</div>
								<div
									class="column is-12"
									v-if="book.language"
								>
									<p><strong>Jazyk:</strong> {{ book.language | capitalize }}</p>
								</div>
								<div
									class="column is-12"
									v-if="book.pageCount"
								>
									<p><strong>Počet strán:</strong> {{ book.pageCount }}</p>
								</div>
								<div
									class="column is-12"
									v-if="book.publisher"
								>
									<p><strong>Vydavateľstvo:</strong> {{ book.publisher }}</p>
								</div>
								<div
									class="column is-12"
									v-if="book.publishedDate"
								>
									<p><strong>Publikácia:</strong> {{ book.publishedDate }}</p>
								</div>
								<div
									class="column is-12"
									v-if="book.averageRating"
								>
									<p><strong>Hodnotenie knihy:</strong> {{ book.averageRating }} / 5 <span v-if="book.ratingsCount">({{ book.ratingsCount }})</span> </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="column is-">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">Popis knihy</p>
					</header>
					<div class="card-content">
						<div
							class="content has-text-left"
							v-html="book.description"
							v-if="book.description"
						>
							{{ book.description }}
						</div>
						<div
							class="content"
							v-if="!book.description"
						>
							<p>Kniha nemá žiaden popis. <br> Pridajte popis kliknutím <a href="#">sem</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import VueRouter from "vue-router";
import { isArray } from "util";

// Light Box

let apiKey = "AIzaSyAQ1kNKntSFmSxtFzo7qB-7SqgB50Yd_ok";

export default {
	data() {
		return {
			bookId: this.$route.params.id,
			book: []
		};
	},
	created() {
		this.getBook(this.bookId);
	},
	methods: {
		getBook: function(bookId) {
			axios
				.get(
					"https://www.googleapis.com/books/v1/volumes/" +
						bookId +
						"?:keyes&key=" +
						apiKey
				)
				.then(response => {
					this.book = response.data.volumeInfo;
					console.log(this.book);
				});
		}
	},
	filters: {
		split: function(items) {
			if (isArray(items)) {
				return items.join(", ");
			} else {
				return items;
			}
		},
		truncate: function(text, length, clamp) {
			clamp = clamp || "...";
			var node = document.createElement("div");
			node.innerHTML = text;
			var content = node.textContent;
			return content.length > length
				? content.slice(0, length) + clamp
				: content;
		},
		capitalize: function(value) {
			if (!value) return "";
			value = value.toString();
			return value.toUpperCase();
		}
	}
};
</script
>>

<style lang="scss" scoped>
</style>
