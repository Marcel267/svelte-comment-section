import ghpages from "gh-pages";
import * as child from "child_process";

console.log("");

function runBuild() {
	return new Promise((resolve, reject) => {
		child.exec("npm run build", function (error, stdout, stderr) {
			console.log("stdout: " + stdout);
			console.log("stderr: " + stderr);
			if (error !== null) {
				console.log("exec error: " + error);
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

async function deploy() {
	try {
		console.log("Building the project...");
		await runBuild(); // Wait for the build to finish
		console.log("Build complete. Now deploying...");

		ghpages.publish(
			"dist", // path to public directory
			{
				branch: "gh-pages",
				repo: "https://github.com/Marcel267/svelte-comment-section.git", // Update to point to your repository
				user: {
					name: "Marcel267", // update to use your name
					email: "martinez.otano2000@web.de", // Update to use your email
				},
			},
			() => {
				console.log("Deploy Complete!");
			}
		);
	} catch (err) {
		console.error("Error during deployment:", err);
	}
}

deploy(); // Call the deploy function to start the deployment process
