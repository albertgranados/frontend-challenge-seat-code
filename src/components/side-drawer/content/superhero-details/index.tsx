import { useDrawerStore } from '@/stores/use-drawer-store'
import ProgressBar from '@/components/ui/progress-bar'
import Badge from '@/components/ui/badge'

export default function SuperheroDetails() {
  const { selectedSuperhero } = useDrawerStore()

  return (
    <div>
      <div className="pb-1 sm:pb-6">
        <div>
          <div className="relative h-60 sm:h-72 bg-gray-50">
            {selectedSuperhero?.images.lg && (
              <img
                alt={selectedSuperhero.name + `'s cover`}
                src={selectedSuperhero.images.lg}
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                className="absolute size-full object-cover opacity-0 transition-opacity duration-300"
              />
            )}
          </div>
          <div className="mt-6 px-8 sm:mt-8 sm:flex sm:items-end sm:px-6">
            <div className="sm:flex-1">
              <div>
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {selectedSuperhero?.name}
                  </h3>
                </div>
                {selectedSuperhero?.biography.fullName && (
                  <p className="text-sm text-gray-500">
                    {selectedSuperhero?.biography.fullName}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">
              Publisher
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <p>
                {selectedSuperhero?.biography.publisher || 'Unknown publisher'}
              </p>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">
              First Appearance
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              <p>
                {selectedSuperhero?.biography.firstAppearance ||
                  'Unknown first appearance'}
              </p>
            </dd>
          </div>
          {selectedSuperhero?.biography?.aliases && (
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">
                Aliases
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {selectedSuperhero.biography.aliases.length &&
                selectedSuperhero.biography.aliases[0] !== '-' ? (
                  <ul className="list-disc pl-5">
                    {selectedSuperhero?.biography.aliases.map(
                      (alias, index) => (
                        <li key={index} className="text-gray-900">
                          {alias}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  'No aliases known'
                )}
              </dd>
            </div>
          )}
          <div className="flex flex-row items-start gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">
                Alignment
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {selectedSuperhero?.biography.alignment === 'good' ? (
                  <Badge variant="positive">Good</Badge>
                ) : selectedSuperhero?.biography.alignment === 'bad' ? (
                  <Badge variant="negative">Bad</Badge>
                ) : selectedSuperhero?.biography.alignment === 'neutral' ? (
                  <Badge variant="neutral">Neutral</Badge>
                ) : (
                  <p className="text-gray-500">Unknown alignment</p>
                )}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:shrink-0">
                Gender
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {selectedSuperhero?.appearance.gender ? (
                  <Badge variant="inactive">
                    {selectedSuperhero?.appearance.gender}
                  </Badge>
                ) : (
                  <Badge variant="inactive">-</Badge>
                )}
              </dd>
            </div>
          </div>
          {selectedSuperhero?.powerstats && (
            <div>
              <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                {selectedSuperhero?.powerstats.combat && (
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Combat</dt>
                    <dd className="flex w-full items-center max-w-[50%]">
                      <ProgressBar
                        value={selectedSuperhero?.powerstats.combat || 0}
                      />
                    </dd>
                  </div>
                )}
                {selectedSuperhero?.powerstats.durability && (
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Durability</dt>
                    <dd className="flex w-full items-center max-w-[50%]">
                      <ProgressBar
                        value={selectedSuperhero?.powerstats.durability || 0}
                      />
                    </dd>
                  </div>
                )}
                {selectedSuperhero?.powerstats.intelligence && (
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Intelligence</dt>
                    <dd className="flex w-full items-center max-w-[50%]">
                      <ProgressBar
                        value={selectedSuperhero?.powerstats.intelligence || 0}
                      />
                    </dd>
                  </div>
                )}
                {selectedSuperhero?.powerstats.power && (
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Power</dt>
                    <dd className="flex w-full items-center max-w-[50%]">
                      <ProgressBar
                        value={selectedSuperhero?.powerstats.power || 0}
                      />
                    </dd>
                  </div>
                )}
                {selectedSuperhero?.powerstats.speed && (
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Speed</dt>
                    <dd className="flex w-full items-center max-w-[50%]">
                      <ProgressBar
                        value={selectedSuperhero?.powerstats.speed || 0}
                      />
                    </dd>
                  </div>
                )}
                {selectedSuperhero?.powerstats.strength && (
                  <div className="flex justify-between py-3 text-sm font-medium">
                    <dt className="text-gray-500">Strength</dt>
                    <dd className="flex w-full items-center max-w-[50%]">
                      <ProgressBar
                        value={selectedSuperhero?.powerstats.strength || 0}
                      />
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </dl>
      </div>
    </div>
  )
}
