<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Card from '$lib/components/Card.svelte';
    import { contactInfo, site } from '$lib/content/site';
</script>

<svelte:head>
    <title>Contact | {site.labName}</title>
</svelte:head>

<PageHeader
    title="Contact"
    subtitle="Placeholder contact details. Replace email, address, and links with real information."
/>

<Section title="Get in touch">
    <div class="grid">
        <Card title="Email">
            <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p class="muted">Placeholder: add a note about response time and appropriate topics.</p>
        </Card>

        <Card title="Location">
            <p class="muted">{contactInfo.addressLine1}</p>
            <p class="muted">{contactInfo.addressLine2}</p>
            <p class="muted">Office hours: {contactInfo.officeHours}</p>
        </Card>

        <Card title="Social / links">
            <ul class="links">
                {#each contactInfo.socials as social}
                    <li><a href={social.href} rel="noreferrer" target="_blank">{social.label}</a></li>
                {/each}
            </ul>
            <p class="muted">Placeholder: add additional links (lab handbook, applications, etc.).</p>
        </Card>
    </div>
</Section>

<Section title="Contact form (optional)" subtitle="This is a non-functional placeholder form.">
    <form class="form" on:submit|preventDefault={() => {}}>
        <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Placeholder: Your name" />
        </label>

        <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Placeholder: your.email@example.com" />
        </label>

        <label class="full">
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Placeholder: How can we help?"></textarea>
        </label>

        <div class="full actions">
            <button class="button primary" type="submit">Send (placeholder)</button>
            <p class="muted">Connect this form to an email service or backend endpoint when ready.</p>
        </div>
    </form>
</Section>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
    }

    .muted {
        margin: 0.5rem 0 0;
        color: var(--color-muted);
        line-height: 1.6;
    }

    .links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 0.5rem;
    }

    .links a {
        font-weight: 500;
        color: var(--color-text);
        text-decoration: underline;
        text-decoration-color: var(--color-border);
    }

    .links a:hover {
        text-decoration-color: var(--color-text);
    }

    .form {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
        padding: 2rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
    }

    label {
        display: grid;
        gap: 0.5rem;
    }

    label span {
        font-weight: 500;
        color: var(--color-text);
        font-size: 0.95rem;
    }

    input,
    textarea {
        width: 100%;
        border-radius: var(--radius-sm);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        padding: 0.75rem 1rem;
        font: inherit;
        transition: border-color 0.2s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: var(--color-text);
    }

    .full {
        grid-column: 1 / -1;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
    }

    .actions p {
        max-width: 65ch;
    }

    @media (max-width: 900px) {
        .grid {
            grid-template-columns: 1fr;
        }

        .form {
            grid-template-columns: 1fr;
        }
    }
</style>
