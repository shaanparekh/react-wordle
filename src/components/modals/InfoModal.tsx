import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hallo! You have 6 tries to guess the WANSHUDLE, which is a word about me n u! 
        After each guess, the color of the tiles will change to show how close your guess was to the word. 
        We will play this wun every night too! Love you!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="P" />
        <Cell value="P" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter H is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="N" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="S" status="absent" />
        <Cell value="H" />
        <Cell value = "U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter S is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
