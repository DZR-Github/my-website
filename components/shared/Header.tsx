import GitHubIcon from "@mui/icons-material/GitHub";

export function Header() {
  return (
    <div className="fixed top-0 w-full px-6 py-1 flex flex-row-reverse">
      <a
        className="mr-10 mt-3"
        href="https://github.com/DZR-Github/my-website"
        target="_blank"
      >
        <GitHubIcon className="text-white" />
      </a>
    </div>
  );
}
