<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import TagRow from '$lib/components/TagRow.svelte';
	import { teamMembers } from '$lib/content/team';
	import { site } from '$lib/content/site';
</script>

<svelte:head>
	<title>Team | {site.labName}</title>
</svelte:head>

<PageHeader
	title="Team"
	subtitle="Placeholder profiles for lab members. Update `src/lib/content/team.ts` to edit names, bios, roles, and links."
/>

<Section title="People">
	<div class="grid">
		{#each teamMembers as member}
			<Card title={member.name} eyebrow={member.role}>
				<div class="profile">
					<img class="photo" src={member.photoSrc} alt={`Placeholder portrait for ${member.name}`} />
					<div>
						<p class="bio">{member.bio}</p>
						<TagRow tags={member.interests} />
						{#if member.links?.length}
							<ul class="links">
								{#each member.links as link}
									<li><a href={link.href}>{link.label}</a></li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			</Card>
		{/each}
	</div>
</Section>

<Section title="Join us" subtitle="Use this area for recruiting and lab participation info.">
	<div class="join">
		<p class="muted">
			Placeholder: Add information for prospective students, collaborations, and how to get involved.
			Include a link to a lab handbook, a form, or an email address.
		</p>
		<a class="button primary" href="/contact">Contact BRAT Lab</a>
	</div>
</Section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.profile {
		display: grid;
		grid-template-columns: 110px 1fr;
		gap: 1rem;
		align-items: start;
	}

	.photo {
		width: 110px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 999px;
		border: 1px solid rgba(27, 94, 32, 0.18);
		background: rgba(255, 255, 255, 0.9);
	}

	.bio {
		margin: 0;
		color: var(--color-muted);
	}

	.links {
		list-style: none;
		padding: 0;
		margin: 0.85rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.links a {
		font-weight: 650;
		color: var(--color-primary-dark);
	}

	.join {
		padding: 1rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		background: rgba(255, 255, 255, 0.65);
	}

	.muted {
		margin: 0 0 1rem;
		color: var(--color-muted);
		max-width: 80ch;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.profile {
			grid-template-columns: 1fr;
		}

		.photo {
			width: 96px;
		}
	}
</style>
