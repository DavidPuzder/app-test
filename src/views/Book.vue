<template>
	<div class="book">
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Zobrazenie kníhy
					</h1>
					<h2 class="subtitle">
						{{ book.title}}
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
								<a class="button is-fullwidth">
									<i class="material-icons">arrow_back_ios</i>
									Späť na knihy</a>
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
						<p class="card-header-title">
							Kniha {{ book.title}}
						</p>
						<a
							href="#"
							class="card-header-icon"
							aria-label="more options"
						>
							<span class="icon">
								<i
									class="fas fa-angle-down"
									aria-hidden="true"
								></i>
							</span>
						</a>
					</header>
					<div class="card-content">
						<div class="content">
							<ul>
								<li
									v-for="(image, index) in images"
									:key="image"
									style="display: inline-block"
								>
									<img
										v-lazy="image.src"
										style="height: 100px"
										@click="openGallery(index)"
									>
								</li>
							</ul>
							<LightBox
								:images="images"
								ref="lightbox"
								:show-caption="true"
								:show-light-box="false"
							>
							</LightBox>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import debounce from "debounce";
import axios from "axios";
import VueRouter from "vue-router";

// Light Box
import LightBox from "vue-image-lightbox";

let apiKey = "AIzaSyAQ1kNKntSFmSxtFzo7qB-7SqgB50Yd_ok";

export default {
	components: {
		LightBox
	},
	data() {
		return {
			bookId: this.$route.params.id,
			book: [],
			images: []
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
					console.log(response.data);
					this.book = response.data.volumeInfo;
					this.images.push({
						thumb: response.data.volumeInfo.imageLinks.thumbnail,
						src: response.data.volumeInfo.imageLinks.extraLarge,
						caption: response.data.volumeInfo.title
					});
				});
		},
		openGallery(index) {
			this.$refs.lightbox.showImage(index);
		}
	}
};
</script>>

<style lang="scss" scoped>
@import "~vue-image-lightbox/dist/vue-image-lightbox.min.css";
</style>
