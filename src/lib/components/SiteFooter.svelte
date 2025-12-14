<script lang="ts">
	import Container from './Container.svelte';
	import { contactInfo, site } from '$lib/content/site';
</script>

<footer class="footer">
	<Container>
		<div class="grid">
			<div>
				<p class="title">{site.labName}</p>
				<p class="muted">{site.labFullName} · {site.institution}</p>
				<p class="muted">Directed by {site.director}</p>
			</div>

			<div>
				<p class="title">Contact</p>
				<p class="muted">
					<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
				</p>
				<p class="muted">{contactInfo.addressLine1}</p>
				<p class="muted">{contactInfo.addressLine2}</p>
			</div>

			<div>
				<p class="title">Links</p>
				<ul>
					{#each contactInfo.socials as social}
						<li><a href={social.href} rel="noreferrer" target="_blank">{social.label}</a></li>
					{/each}
				</ul>
			</div>
		</div>

		<p class="fineprint">
			© {new Date().getFullYear()} {site.labName}. Placeholder content — replace with real lab information.
		</p>
	</Container>
</footer>

<style>
	.footer {
		padding: 3rem 0 2.5rem;
		border-top: 1px solid rgba(27, 94, 32, 0.18);
		margin-top: 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr 0.8fr;
		gap: 1.25rem;
	}

	.title {
		margin: 0 0 0.35rem;
		font-weight: 800;
		color: var(--color-primary-dark);
	}

	.muted {
		margin: 0.25rem 0;
		color: var(--color-muted);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.35rem;
	}

	.fineprint {
		margin: 2rem 0 0;
		font-size: 0.9rem;
		color: rgba(15, 27, 16, 0.65);
	}

	@media (max-width: 860px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
