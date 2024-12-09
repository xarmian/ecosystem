<script lang="ts">
	import '../../app.css';
	import { onMount } from 'svelte';

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		const hamburger = document.querySelector('.hamburger');
		hamburger?.setAttribute('aria-expanded', isMobileMenuOpen.toString());
		const mobileMenu = document.querySelector('.mobile-menu');
		mobileMenu?.setAttribute('aria-hidden', (!isMobileMenuOpen).toString());
	}

	onMount(() => {
		// Close mobile menu when clicking outside
		document.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			if (!target.closest('.mobile-menu') && !target.closest('.hamburger') && isMobileMenuOpen) {
				toggleMobileMenu();
			}
		});
	});
</script>

<div class="min-h-screen bg-voi-dark text-white">
	<!-- Navigation -->
	<nav class="nav" role="navigation">
		<div class="logo">
			<a href="/">
				<img src="/voi-logo.svg" alt="Voi Logo" class="nav-logo">
			</a>
		</div>
		<button 
			class="hamburger" 
			aria-label="Toggle menu" 
			aria-expanded="false"
			on:click={toggleMobileMenu}
		>
			<div class:open={isMobileMenuOpen}></div>
			<div class:open={isMobileMenuOpen}></div>
			<div class:open={isMobileMenuOpen}></div>
		</button>
		<div class="nav-links" role="menubar">
			<a href="https://docs.voi.network/" class="nav-btn" role="menuitem">Learn More</a>
			<a href="https://ecosystem.voi.network/" class="nav-btn primary-btn" role="menuitem">Ecosystem Hub</a>
		</div>
		<div 
			class="mobile-menu" 
			class:active={isMobileMenuOpen} 
			role="menu" 
			aria-hidden="true"
		>
			<a href="https://docs.voi.network/" class="nav-btn" role="menuitem">Learn More</a>
			<a href="https://ecosystem.voi.network/" class="nav-btn primary-btn" role="menuitem">Ecosystem Hub</a>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="pt-16">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="footer">
		<div class="footer-content">
			<!-- Background Accent -->
			<div class="footer-accent"></div>
			<div class="footer-grid">
				<!-- Logo & Social Section -->
				<div class="brand-section">
					<img src="/voi-logo.svg" alt="Voi Logo" class="footer-logo">
					<div class="social-links">
						<a href="https://discord.gg/vnFbrJrHeW" class="social-icon" data-tooltip="Discord">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.078.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
							</svg>
						</a>
						<a href="https://x.com/Voi_Net" class="social-icon" data-tooltip="Twitter">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
							</svg>
						</a>
						<a href="https://github.com/VoiNetwork" class="social-icon" data-tooltip="GitHub">
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</div>
				</div>

				<!-- Build Section -->
				<div class="footer-nav">
					<h3 class="footer-heading">Build</h3>
					<div class="footer-links">
						<a href="https://docs.voi.network/developers/start-here/" class="footer-link">
							Build on Voi
							<span class="link-arrow">↗</span>
						</a>
						<a href="https://docs.voi.network/governance/proposals/product-build-grants/"
							class="footer-link">
							Grant Program
							<span class="link-arrow">↗</span>
						</a>
						<a href="https://docs.voi.network/" class="footer-link">
							Documentation
							<span class="link-arrow">↗</span>
						</a>
						<a href="https://docs.voi.network/developers/sdk/" class="footer-link">
							SDK
							<span class="link-arrow">↗</span>
						</a>
					</div>
				</div>

				<!-- Community Section -->
				<div class="footer-nav">
					<h3 class="footer-heading">Community</h3>
					<div class="footer-links">
						<a href="https://ecosystem.voi.network/" class="footer-link">
							Ecosystem
							<span class="link-arrow">↗</span>
						</a>
						<a href="https://ecosystem.voi.network/" class="footer-link">Token
							<span class="link-arrow">↗</span>
						</a>
						<a href="https://voifoundation.medium.com/" class="footer-link">
							Blog
							<span class="link-arrow">↗</span>
						</a>
						<a href="https://docs.voi.network/governance/proposals/service-grants/" class="footer-link">
							Careers
							<span class="link-arrow">↗</span>
						</a>
					</div>
				</div>
			</div>

			<!-- Footer Bottom -->
			<div class="footer-bottom">
				<div class="copyright">© {new Date().getFullYear()} Voi Foundation</div>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		@apply bg-voi-dark;
	}

	.nav {
		position: fixed;
		width: 100%;
		padding: 0.75rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		background: var(--voi-light);
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.nav-logo {
		height: 32px;
		width: auto;
	}

	.nav-links {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.nav-btn {
		padding: 0.5rem 1.5rem;
		border-radius: 24px;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.2s ease;
		color: white;
		white-space: nowrap;
		letter-spacing: -0.01em;
		font-size: 0.9375rem;
	}

	.nav-btn.primary-btn {
		background: white;
		color: var(--voi-light);
	}

	.nav-btn.primary-btn:hover {
		background: rgba(255, 255, 255, 0.9);
	}

	.nav-btn:not(.primary-btn):hover {
		background: rgba(255, 255, 255, 0.1);
	}

	/* Hamburger Menu */
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-around;
		width: 2rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 10;
	}

	.hamburger div {
		width: 2rem;
		height: 0.25rem;
		background: white;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}

	/* Hamburger Animation */
	.hamburger div:first-child.open {
		transform: rotate(45deg);
	}

	.hamburger div:nth-child(2).open {
		opacity: 0;
	}

	.hamburger div:last-child.open {
		transform: rotate(-45deg);
	}

	.mobile-menu {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: var(--voi-light);
		padding: 2rem;
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;
	}

	.mobile-menu.active {
		transform: translateX(0);
	}

	@media (max-width: 768px) {
		.nav {
			padding: 0.75rem 1rem;
		}

		.nav-logo {
			height: 28px;
		}

		.nav-links {
			gap: 0.5rem;
		}

		.nav-btn {
			padding: 0.5rem 1rem;
			font-size: 0.9rem;
		}

		.nav-links {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.mobile-menu {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;
		}

		.mobile-menu .nav-btn {
			font-size: 1.125rem;
			padding: 1rem 2rem;
			letter-spacing: -0.02em;
		}
	}

	@media (max-width: 480px) {
		.nav-logo {
			height: 24px;
		}

		.nav-links {
			gap: 0.25rem;
		}

		.nav-btn {
			padding: 0.4rem 0.75rem;
			font-size: 0.85rem;
		}
	}

	@media (max-width: 360px) {
		.nav {
			padding: 0.5rem;
		}

		.nav-links {
			flex-wrap: wrap;
			justify-content: flex-end;
		}

		.nav-btn {
			padding: 0.35rem 0.6rem;
			font-size: 0.8rem;
		}
	}

	.footer {
		background: linear-gradient(135deg, #e8e9ec 0%, #d8d9dc 100%);
		padding: 8rem 2rem 4rem;
		position: relative;
		overflow: hidden;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.footer-accent {
		position: absolute;
		top: -50%;
		right: -10%;
		width: 80%;
		height: 200%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(216, 217, 220, 0.3) 100%);
		transform: rotate(-15deg);
		border-radius: 100px;
		filter: blur(50px);
		z-index: 0;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.brand-section {
		padding-right: 2rem;
	}

	.footer-nav {
		padding-right: 2rem;
	}

	.footer-logo {
		max-width: 120px;
		margin-bottom: 2.5rem;
		transition: transform 0.3s ease;
	}

	.footer-logo:hover {
		transform: translateY(-2px);
	}

	.footer-heading {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 2rem;
		color: #000;
		letter-spacing: 0.5px;
	}

	.footer-links {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.footer-link {
		color: #666;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		position: relative;
		width: fit-content;
	}

	.footer-link:hover {
		color: #000;
		transform: translateX(4px);
	}

	.link-arrow {
		font-size: 0.8em;
		opacity: 0;
		transform: translateX(-4px);
		transition: all 0.3s ease;
	}

	.footer-link:hover .link-arrow {
		opacity: 1;
		transform: translateX(0);
	}

	.social-links {
		display: flex;
		gap: 1.75rem;
		margin-top: 2.5rem;
	}

	.social-icon {
		width: 24px;
		height: 24px;
		color: #666;
		transition: all 0.3s ease;
		position: relative;
	}

	.social-icon:hover {
		color: #000;
		transform: translateY(-2px);
	}

	.social-icon[data-tooltip]:before {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(-8px);
		background: #000;
		color: white;
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 12px;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
	}

	.social-icon:hover[data-tooltip]:before {
		opacity: 1;
		visibility: visible;
		transform: translateX(-50%) translateY(-4px);
	}

	.footer-bottom {
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		padding-top: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 6rem 1.5rem 3rem;
		}
		
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.footer-nav, 
		.brand-section {
			padding-right: 0;
		}

		.footer-accent {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.footer-bottom {
			flex-direction: column;
			gap: 1.5rem;
			text-align: center;
		}
	}
</style>
