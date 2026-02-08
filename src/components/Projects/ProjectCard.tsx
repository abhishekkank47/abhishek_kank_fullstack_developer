import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'
import Link from 'next/link';

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[15px] md:size-3" />
    <span className="text-neutral text-[10px]">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
  {/* Top Section */}
  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
    {/* Image (TOP on mobile, RIGHT on desktop) */}
    <figure className="order-1 w-full overflow-hidden md:order-2 md:w-auto md:shrink-0">
      <Image
        src={cover}
        width={170}
        height={90}
        alt="Project Cover"
        className="h-[160px] w-full rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F] md:h-[90px] md:w-[170px]"
      />
    </figure>

    {/* Content */}
    <div className="order-2 flex-1 md:order-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <h3 className="text-secondary-content text-sm font-medium md:font-semibold">
          {title}
        </h3>

        {type && (
          <span
            className={`p-1 w-fit  rounded-md bg-[#FFFFFF1A] px-3 text-[10px] backdrop-blur-[80px]
            ${type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'}`}
          >
            {type}
          </span>
        )}
      </div>

      <ul className="mt-3 flex flex-wrap gap-2 sm:gap-4">
        {(visitors || numberOfSales) && (
          <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
        )}
        {siteAge && <IconText text={siteAge} icon={Timer} />}
        {earned && <IconText text={earned} icon={Earning} />}
        {(ratings || githubStars) && (
          <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
        )}
      </ul>
    </div>
  </div>

  {/* Bottom Section (unchanged) */}
  <div>
    <div className="bg-primary text-primary-content my-4 rounded-2xl px-4 py-2">
      <p className="text-[14px] font-normal md:text-base line-clamp-4 md:line-clamp-3">
        {shortDescription}
      </p>
    </div>

    <div className="flex gap-5">
      {livePreview && (
        <Link
          href={livePreview}
          className="text-accent flex gap-2 text-sm hover:underline underline-offset-4 md:text-base"
          target="_blank"
        >
          <PreviewIcon className="w-[18px] md:w-5" />
          Live Preview
        </Link>
      )}

      {githubLink && (
        <Link
          href={githubLink}
          className="text-accent flex gap-2 text-sm underline underline-offset-4 md:text-base"
          target="_blank"
        >
          <GithubIcon className="w-[18px] md:w-5" />
          Github Link
        </Link>
      )}
    </div>
  </div>
</div>

  )
}

export default ProjectCard
