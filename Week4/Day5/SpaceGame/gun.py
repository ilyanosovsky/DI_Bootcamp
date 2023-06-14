import pygame

class Gun():

    def __init__(self, screen):
        self.screen = screen
        self.image = pygame.image.load('Week4/Day5/SpaceGame/image/laser_gun.png')
        self.rect = self.image.get_rect()
        self.screen_rect = screen.get_rect()
        self.rect.centerx = self.screen_rect.centerx
        self.center = float(self.rect.centerx)
        self.rect.bottom = self.screen_rect.bottom
        self.mright = False
        self.mleft = False

    def output(self):
        # draw a gun in the current position
        self.screen.blit(self.image, self.rect)

    def update_gun(self):
        # update the position of the gun according to the flag
        if self.mright and self.rect.right < self.screen_rect.right:
            self.center += 1.5
        elif self.mleft and self.rect.left > 0:
            self.center -= 1.5

        self.rect.centerx = self.center

