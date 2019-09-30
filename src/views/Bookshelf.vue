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
		<div class="columns is-multiline">
			<div class="column is-12">
				<div
					class="notification"
					v-if="books.length > 0"
				>
					Zobrazovanie výsledkov pre <strong>{{ searchInput }}</strong>
				</div>
			</div>
			<div class="column is-6 is-offset-3">
				<div class="field">
					<p class="control is-large has-icons-left has-icons-right">
						<input
							v-model="searchInput"
							class="input is-large"
							type="text"
							placeholder="vyhľadávanie kníh"
							@change="getBook(searchInput)"
						>
						<span class="icon is-small is-left">
							<i class="material-icons">search</i>
						</span>
					</p>
				</div>
			</div>
		</div>
		<div class="container is-fluid">
			<div class="columns is-multiline">

				<router-link
					:to='"/book/" + book.id'
					v-slot="{ href, route, navigate, isActive, isExactActive }"
					v-for="book in books"
					:key="book.id"
				>
					<div class="column is-2">
						<a
							class="card book"
							:href="href"
							@click="navigate"
						>
							<div class="card-image">
								<figure class="image is-4by3">
									<img
										src="https://bulma.io/images/placeholders/1280x960.png"
										alt="Placeholder image"
									>
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-content">
										<p class="title">{{ book.volumeInfo.title }}</p>
										<p class="subtitle">{{ book.volumeInfo.authors | split | truncate(25, '...') }}</p>
									</div>
								</div>

								<div class="content">
								</div>
							</div>
						</a>
					</div>
				</router-link>

			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { isArray } from "util";

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
			if (searchInput.length < 1) {
				this.books = [];
				return;
			}
			axios
				.get(
					"https://www.googleapis.com/books/v1/volumes?q=" +
						encodeURI(searchInput) +
						":keyes&key=" +
						apiKey
				)
				.then(response => {
					this.books = response.data.items;
				});
		}
	},
	filters: {
		split: function(items) {
			if (isArray(items)) {
				return items.join();
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
		}
	}
};
</script
>>

<style lang="scss" scoped>
.card {
	&.book {
		.title {
			font-size: 1em;
		}
		.subtitle {
			font-size: 0.9em;
		}
	}
}
</style>
