import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {
  ArrowLeft,
  CheckIcon,
  PencilIcon,
  SaveIcon,
  TrashIcon,
  X
} from 'lucide-react'
import { useDrawerStore } from '@/stores/use-drawer-store'
import Button from '../ui/button'
import type { SideDrawerProps } from './types'
import SuperheroForm from '@/components/side-drawer/content/superhero-form'
import SuperheroDetails from '@/components/side-drawer/content/superhero-details'

export default function SideDrawer({
  handleCreateSuperhero,
  handleEditSuperhero,
  deleteSuperhero
}: SideDrawerProps) {
  const {
    selectedSuperhero,
    isDrawerOpen,
    closeDrawer,
    openDrawer,
    drawerType
  } = useDrawerStore()

  const isEditing = selectedSuperhero !== null && drawerType === 'form'
  const isNewSuperhero = selectedSuperhero === null && drawerType === 'form'

  return (
    <Dialog open={isDrawerOpen} onClose={closeDrawer} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-300 ease-in-out data-closed:translate-x-full sm:duration-300"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <button
                        type="button"
                        onClick={
                          isEditing
                            ? () => openDrawer('details', selectedSuperhero)
                            : closeDrawer
                        }
                        className="relative cursor-pointer rounded-md bg-white text-gray-400 hover:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <span className="absolute -inset-2.5" />
                        {isEditing ? (
                          <span className="sr-only">Go back</span>
                        ) : (
                          <span className="sr-only">Close panel</span>
                        )}
                        {isEditing ? (
                          <ArrowLeft aria-hidden="true" className="size-6" />
                        ) : (
                          <X aria-hidden="true" className="size-6" />
                        )}
                      </button>
                      <h2
                        id="slide-over-heading"
                        className="text-base font-semibold text-gray-900"
                      >
                        {selectedSuperhero
                          ? drawerType === 'details'
                            ? `Superhero details`
                            : 'Edit Superhero'
                          : 'New Superhero'}
                      </h2>
                    </div>
                    <div className="ml-3 flex h-7 items-center gap-2 sm:gap-4">
                      {!isEditing && !isNewSuperhero && (
                        <Button
                          variant="secondary"
                          onClick={async () => {
                            await closeDrawer()
                            openDrawer('form', selectedSuperhero || null)
                          }}
                        >
                          <span className="sr-only">Edit superhero</span>
                          <span className="inline-flex items-center">
                            <PencilIcon aria-hidden="true" className="size-5" />
                            <span className="hidden ml-2 sm:block">Edit</span>
                          </span>
                        </Button>
                      )}
                      <Button
                        onClick={
                          isNewSuperhero
                            ? () => {
                                handleCreateSuperhero()
                                closeDrawer()
                              }
                            : isEditing
                              ? () => {
                                  handleEditSuperhero(selectedSuperhero)
                                  closeDrawer()
                                }
                              : () => {
                                  deleteSuperhero(selectedSuperhero?.id || -1)
                                  closeDrawer()
                                }
                        }
                      >
                        <span className="sr-only">Delete superhero</span>
                        <span className="inline-flex items-center">
                          {isNewSuperhero ? (
                            <CheckIcon aria-hidden="true" className="size-5" />
                          ) : isEditing ? (
                            <SaveIcon aria-hidden="true" className="size-5" />
                          ) : (
                            <TrashIcon aria-hidden="true" className="size-5" />
                          )}
                          {isNewSuperhero ? (
                            <span className="hidden ml-2 sm:block">Create</span>
                          ) : isEditing ? (
                            <span className="hidden ml-2 sm:block">Save</span>
                          ) : (
                            <span className="hidden ml-2 sm:block">Delete</span>
                          )}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                {drawerType === 'details' ? (
                  <SuperheroDetails />
                ) : (
                  <SuperheroForm />
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
